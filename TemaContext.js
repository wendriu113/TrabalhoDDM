import React, { createContext, useEffect, useRef, useState } from 'react';
import { getAppDatabase } from './appStorage';

export const TemaContext = createContext();

export function TemaProvider({ children, usuarioId }) {
  const [temaEscuro, setTemaEscuro] = useState(false);
  const [carregandoDados, setCarregandoDados] = useState(true);
  const dadosCarregadosRef = useRef(false);

  useEffect(() => {
    let ativo = true;

    async function carregarTemaDoUsuario() {
      dadosCarregadosRef.current = false;
      setCarregandoDados(true);

      if (!usuarioId) {
        setTemaEscuro(false);
        if (ativo) {
          setCarregandoDados(false);
        }
        return;
      }

      try {
        const banco = await getAppDatabase();
        const dados = await banco.getFirstAsync(
          'SELECT tema_escuro FROM preferencias_usuario WHERE usuario_id = ?',
          usuarioId
        );

        if (!ativo) {
          return;
        }

        setTemaEscuro(Boolean(dados?.tema_escuro));
        dadosCarregadosRef.current = true;
      } catch {
        if (ativo) {
          setTemaEscuro(false);
        }
      } finally {
        if (ativo) {
          setCarregandoDados(false);
        }
      }
    }

    carregarTemaDoUsuario();

    return () => {
      ativo = false;
    };
  }, [usuarioId]);

  useEffect(() => {
    if (!usuarioId || carregandoDados || !dadosCarregadosRef.current) {
      return;
    }

    async function salvarTemaDoUsuario() {
      const banco = await getAppDatabase();
      await banco.runAsync(
        'INSERT OR REPLACE INTO preferencias_usuario (usuario_id, tema_escuro) VALUES (?, ?)',
        usuarioId,
        temaEscuro ? 1 : 0
      );
    }

    salvarTemaDoUsuario();
  }, [usuarioId, temaEscuro, carregandoDados]);

  const toggleTema = () => {
    setTemaEscuro((valorAtual) => !valorAtual);
  };

  return (
    <TemaContext.Provider value={{ temaEscuro, setTemaEscuro, toggleTema, carregandoDados }}>
      {children}
    </TemaContext.Provider>
  );
}
