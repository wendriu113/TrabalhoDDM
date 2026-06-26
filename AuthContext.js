import React, { createContext, useEffect, useMemo, useRef, useState } from 'react';
import * as SQLite from 'expo-sqlite';

export const AuthContext = createContext();

const DATABASE_NAME = 'trabalhoddm_auth.db';

export function AuthProvider({ children }) {
  const databaseRef = useRef(null);
  const [usuario, setUsuario] = useState(null);
  const [carregandoBanco, setCarregandoBanco] = useState(true);
  const [erroBanco, setErroBanco] = useState('');

  useEffect(() => {
    let ativo = true;

    async function prepararBanco() {
      try {
        const database = await SQLite.openDatabaseAsync(DATABASE_NAME);
        await database.execAsync(`
          PRAGMA journal_mode = WAL;
          CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            senha TEXT NOT NULL,
            criado_em TEXT DEFAULT CURRENT_TIMESTAMP
          );
        `);

        if (ativo) {
          databaseRef.current = database;
          setErroBanco('');
          setCarregandoBanco(false);
        }
      } catch (error) {
        if (ativo) {
          setErroBanco('Não foi possível abrir o banco local.');
          setCarregandoBanco(false);
        }
      }
    }

    prepararBanco();

    return () => {
      ativo = false;
    };
  }, []);

  const normalizarEmail = (email) => email.trim().toLowerCase();

  const garantirBanco = () => {
    if (!databaseRef.current) {
      throw new Error('O banco de dados ainda não está pronto.');
    }

    return databaseRef.current;
  };

  const registrar = async ({ nome, email, senha }) => {
    const nomeLimpo = nome.trim();
    const emailNormalizado = normalizarEmail(email);

    if (!nomeLimpo || !emailNormalizado || !senha) {
      throw new Error('Preencha nome, e-mail e senha.');
    }

    const banco = garantirBanco();
    const usuarioExistente = await banco.getFirstAsync(
      'SELECT id FROM usuarios WHERE email = ?',
      emailNormalizado
    );

    if (usuarioExistente) {
      throw new Error('Esse e-mail já está cadastrado.');
    }

    const resultado = await banco.runAsync(
      'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
      nomeLimpo,
      emailNormalizado,
      senha
    );

    const novoUsuario = {
      id: resultado.lastInsertRowId,
      nome: nomeLimpo,
      email: emailNormalizado,
    };

    setUsuario(novoUsuario);
    return novoUsuario;
  };

  const entrar = async ({ email, senha }) => {
    const emailNormalizado = normalizarEmail(email);

    if (!emailNormalizado || !senha) {
      throw new Error('Preencha e-mail e senha.');
    }

    const banco = garantirBanco();
    const usuarioEncontrado = await banco.getFirstAsync(
      'SELECT id, nome, email FROM usuarios WHERE email = ? AND senha = ?',
      emailNormalizado,
      senha
    );

    if (!usuarioEncontrado) {
      throw new Error('E-mail ou senha inválidos.');
    }

    setUsuario(usuarioEncontrado);
    return usuarioEncontrado;
  };

  const sair = () => {
    setUsuario(null);
  };

  const value = useMemo(
    () => ({
      usuario,
      carregandoBanco,
      erroBanco,
      registrar,
      entrar,
      sair,
    }),
    [usuario, carregandoBanco, erroBanco]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}