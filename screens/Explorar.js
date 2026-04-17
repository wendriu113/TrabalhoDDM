import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from '../styles';
import { TemaContext } from '../TemaContext';
import { FavoritosContext } from '../FavoritosContext';

export default function Explorar() {
  const { temaEscuro } = useContext(TemaContext);
  const { favoritos, toggleFavorito, getTodosPokemonsComCadastrados } = useContext(FavoritosContext);
  const todosPokemonsDisponíveis = getTodosPokemonsComCadastrados();
  
  const renderItem = ({ item }) => (
    <View style={temaEscuro ? styles.pokemonItemDark : styles.pokemonItem}>
      <Image 
        source={{ uri: item.imagem }}
        style={styles.pokemonImagem}
      />
      
      <View style={styles.pokemonInfo}>
        <Text style={temaEscuro ? styles.pokemonNomeDark : styles.pokemonNome}>{item.nome}</Text>
        <Text style={temaEscuro ? styles.pokemonTipoDark : styles.pokemonTipo}>{item.tipos}</Text>
      </View>
      
      <TouchableOpacity 
        style={styles.botaoFavoritar}
        onPress={() => toggleFavorito(item.id)}
      >
        <Text style={favoritos.includes(item.id) ? styles.iconeFavoritadoAtivo : styles.iconeFavoritado}>
          {favoritos.includes(item.id) ? '❤️' : '🤍'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={temaEscuro ? styles.containerExplorarDark : styles.containerExplorar}>
      <Text style={temaEscuro ? styles.tituloExplorarDark : styles.tituloExplorar}>Explorar Pokémons</Text>
      
      <FlatList
        data={todosPokemonsDisponíveis}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
