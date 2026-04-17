import React, { createContext, useState } from 'react';

export const TimeContext = createContext();

export function TimeProvider({ children }) {
  const [time, setTime] = useState([]);
  const MAX_POKEMON_TIME = 6;

  const adicionarAoTime = (pokemon) => {
    if (time.length < MAX_POKEMON_TIME && !time.find(p => p.id === pokemon.id)) {
      setTime([...time, pokemon]);
    }
  };

  const removerDoTime = (pokemonId) => {
    setTime(time.filter(p => p.id !== pokemonId));
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
      MAX_POKEMON_TIME
    }}>
      {children}
    </TimeContext.Provider>
  );
}
