import React, { useContext } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from '../styles';
import { TemaContext } from '../TemaContext';

export default function Home({ navigation }) {
  const { temaEscuro } = useContext(TemaContext);

  return (
    <ScrollView 
      contentContainerStyle={temaEscuro ? styles.homeInitialContainerDark : styles.homeInitialContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image 
          source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/other/official-artwork/25.png' }} 
          style={styles.logoImage}
        />
      </View>

      {/* Título */}
      <Text style={temaEscuro ? styles.welcomeTitleDark : styles.welcomeTitle}>
        Bem-vindo ao PokéApp
      </Text>

      {/* Subtítulo */}
      <Text style={temaEscuro ? styles.welcomeSubtitleDark : styles.welcomeSubtitle}>
        Descubra, explore e colecione seus Pokémons favoritos em um único lugar!
      </Text>

      {/* Descrição Principal */}
      <View style={temaEscuro ? styles.descriptionBoxDark : styles.descriptionBox}>
        <Text style={temaEscuro ? styles.descriptionTitleDark : styles.descriptionTitle}>
          O que é o PokéApp?
        </Text>
        <Text style={temaEscuro ? styles.descriptionTextDark : styles.descriptionText}>
          Um aplicativo incrível desenvolvido para fãs de Pokémon. Aqui você pode explorar uma vasta base de dados de Pokémons, visualizar seus detalhes, características e marcar seus favoritos para consulta rápida.
        </Text>
      </View>

      {/* Recursos */}
      <Text style={temaEscuro ? styles.descriptionTitleDark : styles.descriptionTitle}>
        Funcionalidades:
      </Text>
      
      <View style={styles.featuresList}>
        <View style={temaEscuro ? styles.featureItemDark : styles.featureItem}>
          <Text style={temaEscuro ? styles.featureIconDark : styles.featureIcon}>🔍</Text>
          <Text style={temaEscuro ? styles.featureTextDark : styles.featureText}>
            Explorar Pokémons - Navegue por uma lista completa de Pokémons disponíveis
          </Text>
        </View>

        <View style={temaEscuro ? styles.featureItemDark : styles.featureItem}>
          <Text style={temaEscuro ? styles.featureIconDark : styles.featureIcon}>❤️</Text>
          <Text style={temaEscuro ? styles.featureTextDark : styles.featureText}>
            Marcar Favoritos - Selecione seus Pokémons preferidos para fácil acesso
          </Text>
        </View>

        <View style={temaEscuro ? styles.featureItemDark : styles.featureItem}>
          <Text style={temaEscuro ? styles.featureIconDark : styles.featureIcon}>🌙</Text>
          <Text style={temaEscuro ? styles.featureTextDark : styles.featureText}>
            Modo Escuro - Customize a aparência do app conforme sua preferência
          </Text>
        </View>
      </View>

      {/* Mensagem final */}
      <View style={temaEscuro ? styles.descriptionBoxDark : styles.descriptionBox}>
        <Text style={temaEscuro ? styles.descriptionTextDark : styles.descriptionText}>
          Use a aba "Explorar" para começar sua jornada Pokémon! 🚀
        </Text>
      </View>
    </ScrollView>
  );
}