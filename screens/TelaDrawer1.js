import React, { useContext, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, FlatList, Modal, Button } from 'react-native';
import styles from '../styles';
import { TemaContext } from '../TemaContext';
import { TimeContext } from '../TimeContext';
import { FavoritosContext } from '../FavoritosContext';

export default function TelaDrawer1() {
  const { temaEscuro } = useContext(TemaContext);
  const { time, adicionarAoTime, removerDoTime, limparTime, podeAdicionarMais, MAX_POKEMON_TIME } = useContext(TimeContext);
  const { getTodosPokemonsComCadastrados } = useContext(FavoritosContext);
  const [modalVisivel, setModalVisivel] = useState(false);
  const todosPokemonsDisponíveis = getTodosPokemonsComCadastrados();

  const renderItemTime = ({ item }) => (
    <View style={temaEscuro ? styles.timePokemonItemDark : styles.timePokemonItem}>
      <Image 
        source={{ uri: item.imagem }}
        style={styles.timePokemonImagem}
      />
      <View style={styles.timePokemonInfo}>
        <Text style={temaEscuro ? styles.timePokemonNomeDark : styles.timePokemonNome}>{item.nome}</Text>
        <Text style={temaEscuro ? styles.timePokemonTipoDark : styles.timePokemonTipo}>{item.tipos}</Text>
      </View>
      <TouchableOpacity 
        onPress={() => removerDoTime(item.id)}
        style={styles.botaoRemover}
      >
        <Text style={styles.iconeRemover}>✕</Text>
      </TouchableOpacity>
    </View>
  );

  const pokemonsDisponiveis = todosPokemonsDisponíveis.filter(p => !time.find(t => t.id === p.id));

  const renderPokemonDisponivel = ({ item }) => (
    <TouchableOpacity 
      onPress={() => {
        if (podeAdicionarMais()) {
          adicionarAoTime(item);
        }
      }}
      disabled={!podeAdicionarMais()}
      style={[
        temaEscuro ? styles.pokemonSelectItemDark : styles.pokemonSelectItem,
        !podeAdicionarMais() && styles.pokemonSelectItemDesabilitado
      ]}
    >
      <Image 
        source={{ uri: item.imagem }}
        style={styles.pokemonSelectImagem}
      />
      <Text style={temaEscuro ? styles.pokemonSelectNomeDark : styles.pokemonSelectNome}>
        {item.nome}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={temaEscuro ? styles.timeScreenDark : styles.timeScreen}>
      <View style={temaEscuro ? styles.timeContainerDark : styles.timeContainer}>
        <Text style={temaEscuro ? styles.timeTitleDark : styles.timeTitle}>Criar Seu Time</Text>
        
        <View style={styles.timeCounter}>
          <Text style={temaEscuro ? styles.timeCounterTextDark : styles.timeCounterText}>
            Pokémons no time: {time.length}/{MAX_POKEMON_TIME}
          </Text>
        </View>

        {time.length === 0 ? (
          <View style={temaEscuro ? styles.timeEmptyDark : styles.timeEmpty}>
            <Text style={temaEscuro ? styles.timeEmptyTextDark : styles.timeEmptyText}>
              Seu time está vazio! 👇
            </Text>
            <Text style={temaEscuro ? styles.timeEmptySubtextDark : styles.timeEmptySubtext}>
              Selecione pokémons para formar seu time
            </Text>
          </View>
        ) : (
          <View>
            <Text style={temaEscuro ? styles.timeSectionTitleDark : styles.timeSectionTitle}>
              Seu Time:
            </Text>
            <FlatList
              data={time}
              keyExtractor={item => item.id}
              renderItem={renderItemTime}
              scrollEnabled={false}
            />
            <TouchableOpacity 
              style={styles.botaoLimparTime}
              onPress={limparTime}
            >
              <Text style={styles.botaoLimparTimeText}>Limpar Time</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity 
          style={[
            styles.botaoAdicionarPokemon,
            !podeAdicionarMais() && styles.botaoDesabilitado
          ]}
          onPress={() => setModalVisivel(true)}
          disabled={!podeAdicionarMais()}
        >
          <Text style={styles.botaoAdicionarPokemonText}>
            {podeAdicionarMais() ? '➕ Adicionar Pokémon' : '❌ Time Completo'}
          </Text>
        </TouchableOpacity>

        <Modal
          visible={modalVisivel}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.modalOverlay}>
            <View style={temaEscuro ? styles.modalContentDark : styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={temaEscuro ? styles.modalTitleDark : styles.modalTitle}>
                  Selecione um Pokémon
                </Text>
                <TouchableOpacity onPress={() => setModalVisivel(false)}>
                  <Text style={styles.modalCloseButton}>✕</Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={pokemonsDisponiveis}
                keyExtractor={item => item.id}
                renderItem={renderPokemonDisponivel}
                numColumns={2}
                columnWrapperStyle={styles.gridWrapper}
                scrollEnabled={true}
              />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}