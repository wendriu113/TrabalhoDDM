import * as SQLite from 'expo-sqlite';

const DATABASE_NAME = 'trabalhoddm_data.db';

let databasePromise = null;

async function abrirBanco() {
  const database = await SQLite.openDatabaseAsync(DATABASE_NAME);

  await database.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS favoritos_usuario (
      usuario_id INTEGER PRIMARY KEY,
      favoritos_json TEXT NOT NULL DEFAULT '[]',
      pokemons_json TEXT NOT NULL DEFAULT '[]'
    );
    CREATE TABLE IF NOT EXISTS time_usuario (
      usuario_id INTEGER PRIMARY KEY,
      time_json TEXT NOT NULL DEFAULT '[]'
    );
    CREATE TABLE IF NOT EXISTS preferencias_usuario (
      usuario_id INTEGER PRIMARY KEY,
      tema_escuro INTEGER NOT NULL DEFAULT 0
    );
  `);

  return database;
}

export function getAppDatabase() {
  if (!databasePromise) {
    databasePromise = abrirBanco();
  }

  return databasePromise;
}

export function parseJsonArray(value, fallback = []) {
  if (!value) {
    return fallback;
  }

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
}