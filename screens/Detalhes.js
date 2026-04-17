import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles';
import { TemaContext } from '../TemaContext';

export default function Detalhes({ navigation }) {
  const { temaEscuro } = useContext(TemaContext);

  return (
    <View style={temaEscuro ? styles.containerDetalhesDark : styles.containerDetalhes}>
      <Text style={temaEscuro ? styles.textoDark : styles.texto}>Aqui estão os detalhes do Pet!</Text>
      
      <Button 
        title="Voltar para a Home" 
        color="#FF69B4"
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
}