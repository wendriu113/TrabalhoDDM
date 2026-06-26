import React, { useContext, useMemo, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from '../styles';
import { TemaContext } from '../TemaContext';
import { FavoritosContext } from '../FavoritosContext';

export default function Explorar() {
  const { temaEscuro } = useContext(TemaContext);
  const { favoritos, toggleFavorito, getTodosPokemonsComCadastrados } = useContext(FavoritosContext);
  const [busca, setBusca] = useState('');
  const todosPokemonsDisponíveis = getTodosPokemonsComCadastrados();

  const pokemonsFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    if (!termo) {
      return todosPokemonsDisponíveis;
    }

    return todosPokemonsDisponíveis.filter((pokemon) => {
      return (
        pokemon.nome.toLowerCase().includes(termo) ||
        pokemon.tipos.toLowerCase().includes(termo)
      );
    });
  }, [busca, todosPokemonsDisponíveis]);
  
  const renderItem = ({ item }) => (
    <View style={temaEscuro ? styles.pokemonCardDark : styles.pokemonCard}>
      <Image source={{ uri: item.imagem }} style={styles.pokemonImagem} />

      <View style={styles.pokemonInfo}>
        <Text style={temaEscuro ? styles.pokemonNomeDark : styles.pokemonNome}>{item.nome}</Text>
        <Text style={temaEscuro ? styles.pokemonTipoDark : styles.pokemonTipo}>{item.tipos}</Text>
      </View>

      <TouchableOpacity style={styles.botaoFavoritar} onPress={() => toggleFavorito(item.id)}>
        <Text style={favoritos.includes(item.id) ? styles.iconeFavoritadoAtivo : styles.iconeFavoritado}>
          {favoritos.includes(item.id) ? '❤️' : '🤍'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={temaEscuro ? styles.containerExplorarDark : styles.containerExplorar}>
      <View style={temaEscuro ? styles.exploreHeroDark : styles.exploreHero}>
        <Text style={temaEscuro ? styles.exploreEyebrowDark : styles.exploreEyebrow}>Pokédex</Text>
        <Text style={temaEscuro ? styles.tituloExplorarDark : styles.tituloExplorar}>Explorar Pokémons</Text>
        <Text style={temaEscuro ? styles.exploreSubtitleDark : styles.exploreSubtitle}>
          Descubra espécies, marque favoritos e encontre o Marshadow na lista.
        </Text>

        <View style={temaEscuro ? styles.exploreStatsDark : styles.exploreStats}>
          <View style={temaEscuro ? styles.statChipDark : styles.statChip}>
            <Text style={temaEscuro ? styles.statChipLabelDark : styles.statChipLabel}>Total</Text>
            <Text style={temaEscuro ? styles.statChipValueDark : styles.statChipValue}>{pokemonsFiltrados.length}</Text>
          </View>
          <View style={temaEscuro ? styles.statChipDark : styles.statChip}>
            <Text style={temaEscuro ? styles.statChipLabelDark : styles.statChipLabel}>Favoritos</Text>
            <Text style={temaEscuro ? styles.statChipValueDark : styles.statChipValue}>{favoritos.length}</Text>
          </View>
        </View>

        <TextInput
          value={busca}
          onChangeText={setBusca}
          placeholder="Buscar por nome ou tipo"
          placeholderTextColor={temaEscuro ? '#8f9bb3' : '#7a7a7a'}
          style={temaEscuro ? styles.searchInputDark : styles.searchInput}
        />
      </View>

      <FlatList
        data={pokemonsFiltrados}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={pokemonsFiltrados.length === 0 ? styles.emptyListContent : styles.listContent}
        ListEmptyComponent={
          <View style={temaEscuro ? styles.emptyStateDark : styles.emptyState}>
            <Text style={temaEscuro ? styles.emptyStateTitleDark : styles.emptyStateTitle}>Nenhum Pokémon encontrado</Text>
            <Text style={temaEscuro ? styles.emptyStateTextDark : styles.emptyStateText}>
              Tente outro termo de busca para localizar o que você quer.
            </Text>
          </View>
        }
      />
    </View>
  );
}
