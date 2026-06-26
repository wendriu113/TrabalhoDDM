import React, { createContext, useEffect, useRef, useState } from 'react';
import { getAppDatabase, parseJsonArray } from './appStorage';

export const FavoritosContext = createContext();

export const DADOS_POKEMONS = [
  { id: '1', nome: 'Venusaur', tipos: 'Grama / Veneno', imagem: 'https://img.pokemondb.net/artwork/large/venusaur.jpg' },
  { id: '2', nome: 'Charizard', tipos: 'Fogo / Voador', imagem: 'https://img.pokemondb.net/artwork/large/charizard.jpg' },
  { id: '3', nome: 'Blastoise', tipos: 'Água', imagem: 'https://img.pokemondb.net/artwork/large/blastoise.jpg' },
  { id: '4', nome: 'Butterfree', tipos: 'Inseto / Voador', imagem: 'https://img.pokemondb.net/artwork/large/butterfree.jpg' },
  { id: '5', nome: 'Beedrill', tipos: 'Inseto / Veneno', imagem: 'https://img.pokemondb.net/artwork/large/beedrill.jpg' },
  { id: '6', nome: 'Pidgeot', tipos: 'Normal / Voador', imagem: 'https://img.pokemondb.net/artwork/large/pidgeot.jpg' },
  { id: '7', nome: 'Raticate', tipos: 'Normal', imagem: 'https://img.pokemondb.net/artwork/large/raticate.jpg' },
  { id: '8', nome: 'Fearow', tipos: 'Normal / Voador', imagem: 'https://img.pokemondb.net/artwork/large/fearow.jpg' },
  { id: '9', nome: 'Arbok', tipos: 'Veneno', imagem: 'https://img.pokemondb.net/artwork/large/arbok.jpg' },
  { id: '10', nome: 'Raichu', tipos: 'Elétrico', imagem: 'https://img.pokemondb.net/artwork/large/raichu.jpg' },
  { id: '11', nome: 'Sandslash', tipos: 'Terra', imagem: 'https://img.pokemondb.net/artwork/large/sandslash.jpg' },
  { id: '12', nome: 'Nidoqueen', tipos: 'Veneno / Terra', imagem: 'https://img.pokemondb.net/artwork/large/nidoqueen.jpg' },
  { id: '13', nome: 'Nidoking', tipos: 'Veneno / Terra', imagem: 'https://img.pokemondb.net/artwork/large/nidoking.jpg' },
  { id: '14', nome: 'Clefable', tipos: 'Fada', imagem: 'https://img.pokemondb.net/artwork/large/clefable.jpg' },
  { id: '15', nome: 'Ninetales', tipos: 'Fogo', imagem: 'https://img.pokemondb.net/artwork/large/ninetales.jpg' },
  { id: '16', nome: 'Wigglytuff', tipos: 'Normal / Fada', imagem: 'https://img.pokemondb.net/artwork/large/wigglytuff.jpg' },
  { id: '18', nome: 'Golbat', tipos: 'Venenoso / Voador', imagem: 'https://img.pokemondb.net/artwork/large/golbat.jpg' },
  { id: '19', nome: 'Vileplume', tipos: 'Grama / Veneno', imagem: 'https://img.pokemondb.net/artwork/large/vileplume.jpg' },
  { id: '20', nome: 'Parasect', tipos: 'Inseto / Grama', imagem: 'https://img.pokemondb.net/artwork/large/parasect.jpg' },
  { id: '21', nome: 'Venomoth', tipos: 'Inseto / Veneno', imagem: 'https://img.pokemondb.net/artwork/large/venomoth.jpg' },
  { id: '22', nome: 'Dugtrio', tipos: 'Terra', imagem: 'https://img.pokemondb.net/artwork/large/dugtrio.jpg' },
  { id: '23', nome: 'Persian', tipos: 'Normal', imagem: 'https://img.pokemondb.net/artwork/large/persian.jpg' },
  { id: '24', nome: 'Golduck', tipos: 'Água', imagem: 'https://img.pokemondb.net/artwork/large/golduck.jpg' },
  { id: '25', nome: 'Primeape', tipos: 'Lutador', imagem: 'https://img.pokemondb.net/artwork/large/primeape.jpg' },
  { id: '26', nome: 'Arcanine', tipos: 'Fogo', imagem: 'https://img.pokemondb.net/artwork/large/arcanine.jpg' },
  { id: '27', nome: 'Poliwrath', tipos: 'Água / Lutador', imagem: 'https://img.pokemondb.net/artwork/large/poliwrath.jpg' },
  { id: '28', nome: 'Alakazam', tipos: 'Psíquico', imagem: 'https://img.pokemondb.net/artwork/large/alakazam.jpg' },
  { id: '29', nome: 'Machamp', tipos: 'Lutador', imagem: 'https://img.pokemondb.net/artwork/large/machamp.jpg' },
  { id: '30', nome: 'Victreebel', tipos: 'Grama / Veneno', imagem: 'https://img.pokemondb.net/artwork/large/victreebel.jpg' },
  { id: '31', nome: 'Tentacruel', tipos: 'Água / Veneno', imagem: 'https://img.pokemondb.net/artwork/large/tentacruel.jpg' },
  { id: '32', nome: 'Golem', tipos: 'Pedra / Terra', imagem: 'https://img.pokemondb.net/artwork/large/golem.jpg' },
  { id: '33', nome: 'Rapidash', tipos: 'Fogo', imagem: 'https://img.pokemondb.net/artwork/large/rapidash.jpg' },
  { id: '34', nome: 'Slowbro', tipos: 'Água / Psíquico', imagem: 'https://img.pokemondb.net/artwork/large/slowbro.jpg' },
  { id: '35', nome: 'Magneton', tipos: 'Elétrico / Aço', imagem: 'https://img.pokemondb.net/artwork/large/magneton.jpg' },
  { id: '36', nome: "Farfetch'd", tipos: 'Normal / Voador', imagem: 'https://img.pokemondb.net/artwork/large/farfetchd.jpg' },
  { id: '37', nome: 'Dodrio', tipos: 'Normal / Voador', imagem: 'https://img.pokemondb.net/artwork/large/dodrio.jpg' },
  { id: '38', nome: 'Dewgong', tipos: 'Água / Gelo', imagem: 'https://img.pokemondb.net/artwork/large/dewgong.jpg' },
  { id: '39', nome: 'Muk', tipos: 'Venenoso', imagem: 'https://img.pokemondb.net/artwork/large/muk.jpg' },
  { id: '40', nome: 'Cloyster', tipos: 'Água / Gelo', imagem: 'https://img.pokemondb.net/artwork/large/cloyster.jpg' },
  { id: '41', nome: 'Gengar', tipos: 'Fantasma / Veneno', imagem: 'https://img.pokemondb.net/artwork/large/gengar.jpg' },
  { id: '42', nome: 'Onix', tipos: 'Pedra / Terra', imagem: 'https://img.pokemondb.net/artwork/large/onix.jpg' },
  { id: '43', nome: 'Hypno', tipos: 'Psíquico', imagem: 'https://img.pokemondb.net/artwork/large/hypno.jpg' },
  { id: '44', nome: 'Kingler', tipos: 'Água', imagem: 'https://img.pokemondb.net/artwork/large/kingler.jpg' },
  { id: '45', nome: 'Electrode', tipos: 'Elétrico', imagem: 'https://img.pokemondb.net/artwork/large/electrode.jpg' },
  { id: '46', nome: 'Exeggutor', tipos: 'Grama / Psíquico', imagem: 'https://img.pokemondb.net/artwork/large/exeggutor.jpg' },
  { id: '47', nome: 'Marowak', tipos: 'Terra', imagem: 'https://img.pokemondb.net/artwork/large/marowak.jpg' },
  { id: '48', nome: 'Hitmonlee', tipos: 'Lutador', imagem: 'https://img.pokemondb.net/artwork/large/hitmonlee.jpg' },
  { id: '49', nome: 'Hitmonchan', tipos: 'Lutador', imagem: 'https://img.pokemondb.net/artwork/large/hitmonchan.jpg' },
  { id: '50', nome: 'Lickitung', tipos: 'Normal', imagem: 'https://img.pokemondb.net/artwork/large/lickitung.jpg' },
  { id: '51', nome: 'Weezing', tipos: 'Venenoso', imagem: 'https://img.pokemondb.net/artwork/large/koffing.jpg' },
  { id: '52', nome: 'Rhydon', tipos: 'Terra / Pedra', imagem: 'https://img.pokemondb.net/artwork/large/rhydon.jpg' },
  { id: '53', nome: 'Chansey', tipos: 'Normal', imagem: 'https://img.pokemondb.net/artwork/large/chansey.jpg' },
  { id: '54', nome: 'Tangela', tipos: 'Grama', imagem: 'https://img.pokemondb.net/artwork/large/tangela.jpg' },
  { id: '55', nome: 'Kangaskhan', tipos: 'Normal', imagem: 'https://img.pokemondb.net/artwork/large/kangaskhan.jpg' },
  { id: '56', nome: 'Seadra', tipos: 'Água', imagem: 'https://img.pokemondb.net/artwork/large/seadra.jpg' },
  { id: '57', nome: 'Seaking', tipos: 'Água', imagem: 'https://img.pokemondb.net/artwork/large/seaking.jpg' },
  { id: '58', nome: 'Starmie', tipos: 'Água / Psíquico', imagem: 'https://img.pokemondb.net/artwork/large/starmie.jpg' },
  { id: '59', nome: 'Mr. Mime', tipos: 'Psíquico / Fada', imagem: 'https://img.pokemondb.net/artwork/large/mr-mime.jpg' },
  { id: '60', nome: 'Scyther', tipos: 'Inseto / Voador', imagem: 'https://img.pokemondb.net/artwork/large/scyther.jpg' },
  { id: '61', nome: 'Jynx', tipos: 'Gelo / Psíquico', imagem: 'https://img.pokemondb.net/artwork/large/jynx.jpg' },
  { id: '62', nome: 'Electabuzz', tipos: 'Elétrico', imagem: 'https://img.pokemondb.net/artwork/large/electabuzz.jpg' },
  { id: '63', nome: 'Magmar', tipos: 'Fogo', imagem: 'https://img.pokemondb.net/artwork/large/magmar.jpg' },
  { id: '64', nome: 'Pinsir', tipos: 'Inseto', imagem: 'https://img.pokemondb.net/artwork/large/pinsir.jpg' },
  { id: '65', nome: 'Tauros', tipos: 'Normal', imagem: 'https://img.pokemondb.net/artwork/large/tauros.jpg' },
  { id: '66', nome: 'Gyarados', tipos: 'Água / Voador', imagem: 'https://img.pokemondb.net/artwork/large/gyarados.jpg' },
  { id: '67', nome: 'Lapras', tipos: 'Água / Gelo', imagem: 'https://img.pokemondb.net/artwork/large/lapras.jpg' },
  { id: '68', nome: 'Ditto', tipos: 'Normal', imagem: 'https://img.pokemondb.net/artwork/large/ditto.jpg' },
  { id: '69', nome: 'Eevee', tipos: 'Normal', imagem: 'https://img.pokemondb.net/artwork/large/eevee.jpg' },
  { id: '70', nome: 'Vaporeon', tipos: 'Água', imagem: 'https://img.pokemondb.net/artwork/large/vaporeon.jpg' },
  { id: '71', nome: 'Jolteon', tipos: 'Elétrico', imagem: 'https://img.pokemondb.net/artwork/large/jolteon.jpg' },
  { id: '72', nome: 'Flareon', tipos: 'Fogo', imagem: 'https://img.pokemondb.net/artwork/large/flareon.jpg' },
  { id: '73', nome: 'Porygon', tipos: 'Normal', imagem: 'https://img.pokemondb.net/artwork/large/porygon.jpg' },
  { id: '74', nome: 'Omastar', tipos: 'Pedra / Água', imagem: 'https://img.pokemondb.net/artwork/large/omastar.jpg' },
  { id: '75', nome: 'Kabutops', tipos: 'Pedra / Água', imagem: 'https://img.pokemondb.net/artwork/large/kabutops.jpg' },
  { id: '76', nome: 'Aerodactyl', tipos: 'Pedra / Voador', imagem: 'https://img.pokemondb.net/artwork/large/aerodactyl.jpg' },
  { id: '77', nome: 'Snorlax', tipos: 'Normal', imagem: 'https://img.pokemondb.net/artwork/large/snorlax.jpg' },
  { id: '78', nome: 'Articuno', tipos: 'Gelo / Voador', imagem: 'https://img.pokemondb.net/artwork/large/articuno.jpg' },
  { id: '79', nome: 'Zapdos', tipos: 'Elétrico / Voador', imagem: 'https://img.pokemondb.net/artwork/large/zapdos.jpg' },
  { id: '80', nome: 'Moltres', tipos: 'Fogo / Voador', imagem: 'https://img.pokemondb.net/artwork/large/moltres.jpg' },
  { id: '81', nome: 'Dragonite', tipos: 'Dragão / Voador', imagem: 'https://img.pokemondb.net/artwork/large/dragonite.jpg' },
  { id: '82', nome: 'Mewtwo', tipos: 'Psíquico', imagem: 'https://img.pokemondb.net/artwork/large/mewtwo.jpg' },
  { id: '83', nome: 'Mew', tipos: 'Psíquico', imagem: 'https://img.pokemondb.net/artwork/large/mew.jpg' },
  { id: '84', nome: 'Marshadow', tipos: 'Lutador / Fantasma', imagem: 'https://img.pokemondb.net/artwork/large/marshadow.jpg' },
];

export function FavoritosProvider({ children, usuarioId }) {
  const [favoritos, setFavoritos] = useState([]);
  const [pokemonsCadastrados, setPokemonsCadastrados] = useState([]);
  const [carregandoDados, setCarregandoDados] = useState(true);
  const dadosCarregadosRef = useRef(false);

  useEffect(() => {
    let ativo = true;

    async function carregarDadosDoUsuario() {
      dadosCarregadosRef.current = false;
      setCarregandoDados(true);

      if (!usuarioId) {
        setFavoritos([]);
        setPokemonsCadastrados([]);
        if (ativo) {
          setCarregandoDados(false);
        }
        return;
      }

      try {
        const banco = await getAppDatabase();
        const dados = await banco.getFirstAsync(
          'SELECT favoritos_json, pokemons_json FROM favoritos_usuario WHERE usuario_id = ?',
          usuarioId
        );

        if (!ativo) {
          return;
        }

        setFavoritos(parseJsonArray(dados?.favoritos_json, []));
        setPokemonsCadastrados(parseJsonArray(dados?.pokemons_json, []));
        dadosCarregadosRef.current = true;
      } catch {
        if (ativo) {
          setFavoritos([]);
          setPokemonsCadastrados([]);
        }
      } finally {
        if (ativo) {
          setCarregandoDados(false);
        }
      }
    }

    carregarDadosDoUsuario();

    return () => {
      ativo = false;
    };
  }, [usuarioId]);

  useEffect(() => {
    if (!usuarioId || carregandoDados || !dadosCarregadosRef.current) {
      return;
    }

    async function salvarDadosDoUsuario() {
      const banco = await getAppDatabase();
      await banco.runAsync(
        'INSERT OR REPLACE INTO favoritos_usuario (usuario_id, favoritos_json, pokemons_json) VALUES (?, ?, ?)',
        usuarioId,
        JSON.stringify(favoritos),
        JSON.stringify(pokemonsCadastrados)
      );
    }

    salvarDadosDoUsuario();
  }, [usuarioId, favoritos, pokemonsCadastrados, carregandoDados]);

  const toggleFavorito = (id) => {
    setFavoritos((favoritosAtuais) => (
      favoritosAtuais.includes(id)
        ? favoritosAtuais.filter(fav => fav !== id)
        : [...favoritosAtuais, id]
    ));
  };

  const getPokemonsFavoritos = () => {
    const todosPokemonsDisponíveis = [...DADOS_POKEMONS, ...pokemonsCadastrados];
    return todosPokemonsDisponíveis.filter(pokemon => favoritos.includes(pokemon.id));
  };

  const adicionarPokemon = (nome, tipos, imagem) => {
    const novoId = Math.max(...DADOS_POKEMONS.map(p => parseInt(p.id)), ...pokemonsCadastrados.map(p => parseInt(p.id)), 0) + 1;
    const novoPokemon = {
      id: novoId.toString(),
      nome,
      tipos,
      imagem
    };
    setPokemonsCadastrados((pokemonsAtuais) => [...pokemonsAtuais, novoPokemon]);
    return novoPokemon;
  };

  const getTodosPokemonsComCadastrados = () => {
    return [...DADOS_POKEMONS, ...pokemonsCadastrados];
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito, getPokemonsFavoritos, adicionarPokemon, getTodosPokemonsComCadastrados, pokemonsCadastrados, carregandoDados }}>
      {children}
    </FavoritosContext.Provider>
  );
}
