import React, { createContext, useEffect, useRef, useState } from 'react';
import { getAppDatabase, parseJsonArray } from './appStorage';

export const TimeContext = createContext();

export function TimeProvider({ children, usuarioId }) {
  const [time, setTime] = useState([]);
  const [carregandoDados, setCarregandoDados] = useState(true);
  const dadosCarregadosRef = useRef(false);
  const MAX_POKEMON_TIME = 6;

  useEffect(() => {
    let ativo = true;

    async function carregarTimeDoUsuario() {
      dadosCarregadosRef.current = false;
      setCarregandoDados(true);

      if (!usuarioId) {
        setTime([]);
        if (ativo) {
          setCarregandoDados(false);
        }
        return;
      }

      try {
        const banco = await getAppDatabase();
        const dados = await banco.getFirstAsync(
          'SELECT time_json FROM time_usuario WHERE usuario_id = ?',
          usuarioId
        );

        if (!ativo) {
          return;
        }

        setTime(parseJsonArray(dados?.time_json, []));
        dadosCarregadosRef.current = true;
      } catch {
        if (ativo) {
          setTime([]);
        }
      } finally {
        if (ativo) {
          setCarregandoDados(false);
        }
      }
    }

    carregarTimeDoUsuario();

    return () => {
      ativo = false;
    };
  }, [usuarioId]);

  useEffect(() => {
    if (!usuarioId || carregandoDados || !dadosCarregadosRef.current) {
      return;
    }

    async function salvarTimeDoUsuario() {
      const banco = await getAppDatabase();
      await banco.runAsync(
        'INSERT OR REPLACE INTO time_usuario (usuario_id, time_json) VALUES (?, ?)',
        usuarioId,
        JSON.stringify(time)
      );
    }

    salvarTimeDoUsuario();
  }, [usuarioId, time, carregandoDados]);

  const adicionarAoTime = (pokemon) => {
    setTime((timeAtual) => {
      if (timeAtual.length >= MAX_POKEMON_TIME || timeAtual.find(p => p.id === pokemon.id)) {
        return timeAtual;
      }

      return [...timeAtual, pokemon];
    });
  };

  const removerDoTime = (pokemonId) => {
    setTime((timeAtual) => timeAtual.filter(p => p.id !== pokemonId));
  };

  const limparTime = () => {
    setTime([]);
  };

  const podeAdicionarMais = () => {
    return time.length < MAX_POKEMON_TIME;
  };

  return (
    <TimeContext.Provider value={{ 
      time, 
      adicionarAoTime, 
      removerDoTime, 
      limparTime, 
      podeAdicionarMais,
      MAX_POKEMON_TIME,
      carregandoDados
    }}>
      {children}
    </TimeContext.Provider>
  );
}
