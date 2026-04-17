import React, { createContext, useState } from 'react';

export const TemaContext = createContext();

export function TemaProvider({ children }) {
  const [temaEscuro, setTemaEscuro] = useState(false);

  const toggleTema = () => {
    setTemaEscuro(!temaEscuro);
  };

  return (
    <TemaContext.Provider value={{ temaEscuro, setTemaEscuro, toggleTema }}>
      {children}
    </TemaContext.Provider>
  );
}
