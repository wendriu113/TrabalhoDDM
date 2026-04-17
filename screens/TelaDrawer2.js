import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import * as Speech from 'expo-speech';
import styles from '../styles';
import { TemaContext } from '../TemaContext';
import { FavoritosContext } from '../FavoritosContext';

export default function TelaDrawer2() {
  const { temaEscuro } = useContext(TemaContext);
  const { getTodosPokemonsComCadastrados } = useContext(FavoritosContext);
  const todosPokemonsDisponíveis = getTodosPokemonsComCadastrados();

  const falarNomePokemon = async (nome) => {
    try {
      await Speech.stop();
      await Speech.speak(nome, {
        language: 'pt-BR',
        pitch: 1.0,
        rate: 0.8,
        volume: 1.0,
      });
    } catch (error) {
      console.log('Erro ao falar:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={temaEscuro ? styles.pokemonAudioItemDark : styles.pokemonAudioItem}>
      <Image 
        source={{ uri: item.imagem }}
        style={styles.pokemonAudioImagem}
      />
      
      <View style={styles.pokemonAudioInfo}>
        <Text style={temaEscuro ? styles.pokemonAudioNomeDark : styles.pokemonAudioNome}>{item.nome}</Text>
        <Text style={temaEscuro ? styles.pokemonAudioTipoDark : styles.pokemonAudioTipo}>{item.tipos}</Text>
      </View>
      
      <TouchableOpacity 
        style={styles.botaoAudio}
        onPress={() => falarNomePokemon(item.nome)}
      >
        <Text style={styles.iconeAudio}>🔊</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={temaEscuro ? styles.containerAudioDark : styles.containerAudio}>
      <Text style={temaEscuro ? styles.tituloAudioDark : styles.tituloAudio}>Ouvir Pokémons</Text>
      <Text style={temaEscuro ? styles.subtituloAudioDark : styles.subtituloAudio}>Clique no 🔊 para ouvir o nome do pokémon</Text>
      
      <FlatList
        data={todosPokemonsDisponíveis}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}