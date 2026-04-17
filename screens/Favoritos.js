import React, { useContext } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from '../styles';
import { TemaContext } from '../TemaContext';
import { FavoritosContext } from '../FavoritosContext';

export default function Favoritos (){
    const { temaEscuro } = useContext(TemaContext);
    const { favoritos, toggleFavorito, getPokemonsFavoritos } = useContext(FavoritosContext);
    
    const pokemonsFavoritos = getPokemonsFavoritos();

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
                <Text style={styles.iconeFavoritadoAtivo}>❤️</Text>
            </TouchableOpacity>
        </View>
    );

    const telha_vazia = (
        <View style={temaEscuro ? styles.containerDark : styles.container}>
            <Text style={temaEscuro ? styles.textoTituloDark : styles.textoTitulo}>Meus Favoritos</Text>
            <Text style={temaEscuro ? styles.textoSubtituloDark : styles.textoSubtitulo}>Nenhum pokémon favoritado ainda.</Text>
            <Text style={temaEscuro ? styles.textoSubtituloDark : styles.textoSubtitulo}>Vá para a aba "Explorar" e marque seus favoritos! ❤️</Text>
        </View>
    );
    
    return(
        <View style={temaEscuro ? styles.containerFavoritosDark : styles.containerFavoritos}>
            <Text style={temaEscuro ? styles.tituloExplorarDark : styles.tituloExplorar}>Meus Favoritos</Text>
            
            {pokemonsFavoritos.length === 0 ? (
                telha_vazia
            ) : (
                <FlatList
                    data={pokemonsFavoritos}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    scrollEnabled={false}
                />
            )}
        </View>
    )
}