import React, { useContext, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import styles from '../styles';
import { TemaContext } from '../TemaContext';
import { FavoritosContext } from '../FavoritosContext';

export default function TelaDrawer3() {
  const { temaEscuro } = useContext(TemaContext);
  const { adicionarPokemon } = useContext(FavoritosContext);

  const [nome, setNome] = useState('');
  const [tipos, setTipos] = useState('');
  const [imagem, setImagem] = useState('');

  const handleSalvar = () => {
    if (!nome.trim() || !tipos.trim() || !imagem.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }

    try {
      adicionarPokemon(nome, tipos, imagem);
      Alert.alert('Sucesso!', `${nome} foi adicionado à sua coleção! 🎉`);
      
      // Limpar campos
      setNome('');
      setTipos('');
      setImagem('');
    } catch (error) {
      Alert.alert('Erro', 'Algo deu errado ao adicionar o Pokémon');
    }
  };

  const handleLimpar = () => {
    setNome('');
    setTipos('');
    setImagem('');
  };

  return (
    <ScrollView 
      contentContainerStyle={temaEscuro ? styles.cadastroPokemonContainerDark : styles.cadastroPokemonContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Título */}
      <Text style={temaEscuro ? styles.textoTituloDark : styles.textoTitulo}>
        Cadastrar Novo Pokémon
      </Text>

      <Text style={temaEscuro ? styles.textoSubtituloDark : styles.textoSubtitulo}>
        Adicione um novo Pokémon à sua coleção
      </Text>

      {/* Preview da Imagem */}
      {imagem.trim() && (
        <View style={styles.previewImageContainer}>
          <Image 
            source={{ uri: imagem }}
            style={styles.previewImage}
            onError={() => {
              Alert.alert('Aviso', 'URL da imagem inválida');
            }}
          />
        </View>
      )}

      {/* Campo Nome */}
      <View style={styles.inputContainer}>
        <Text style={temaEscuro ? styles.inputLabelDark : styles.inputLabel}>Nome do Pokémon</Text>
        <TextInput
          style={temaEscuro ? styles.textInputDark : styles.textInput}
          placeholder="Ex: Pikachu"
          placeholderTextColor={temaEscuro ? '#a0a0a0' : '#c0c0c0'}
          value={nome}
          onChangeText={setNome}
        />
      </View>

      {/* Campo Tipos */}
      <View style={styles.inputContainer}>
        <Text style={temaEscuro ? styles.inputLabelDark : styles.inputLabel}>Tipos (separados por /)</Text>
        <TextInput
          style={temaEscuro ? styles.textInputDark : styles.textInput}
          placeholder="Ex: Elétrico / Fogo"
          placeholderTextColor={temaEscuro ? '#a0a0a0' : '#c0c0c0'}
          value={tipos}
          onChangeText={setTipos}
        />
      </View>

      {/* Campo URL Imagem */}
      <View style={styles.inputContainer}>
        <Text style={temaEscuro ? styles.inputLabelDark : styles.inputLabel}>URL da Imagem</Text>
        <TextInput
          style={temaEscuro ? styles.textInputDark : styles.textInput}
          placeholder="https://exemplo.com/imagem.jpg"
          placeholderTextColor={temaEscuro ? '#a0a0a0' : '#c0c0c0'}
          value={imagem}
          onChangeText={setImagem}
        />
      </View>

      {/* Botões */}
      <View style={styles.botoesContainer}>
        <TouchableOpacity 
          style={[styles.botaoPrimario, temaEscuro && styles.botaoPrimarioDark]}
          onPress={handleSalvar}
        >
          <Text style={styles.botaoTexto}>✓ Salvar Pokémon</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.botaoSecundario, temaEscuro && styles.botaoSecundarioDark]}
          onPress={handleLimpar}
        >
          <Text style={styles.botaoTextoSecundario}>✕ Limpar</Text>
        </TouchableOpacity>
      </View>

      {/* Dica */}
      <View style={temaEscuro ? styles.dicaContainerDark : styles.dicaContainer}>
        <Text style={temaEscuro ? styles.dicaTextoDark : styles.dicaTexto}>
          💡 Dica: Use URLs de imagens de sites como pokemondb.net para melhores resultados
        </Text>
      </View>
    </ScrollView>
  );
}
