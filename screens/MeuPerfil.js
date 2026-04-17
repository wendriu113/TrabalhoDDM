import React, { useContext } from 'react';
import { Text, View, Switch } from 'react-native';
import styles from '../styles';
import { TemaContext } from '../TemaContext';

export default function MeuPerfil (){
    const { temaEscuro, toggleTema } = useContext(TemaContext);

    return(
        <View style={temaEscuro ? styles.settingsContainerDark : styles.settingsContainer}>
            <Text style={temaEscuro ? styles.textoTituloDark : styles.textoTitulo}>Configurações</Text>
            <Text style={temaEscuro ? styles.textoSubtituloDark : styles.textoSubtitulo}>Ajuste suas preferências e configurações.</Text>
            
            <View style={temaEscuro ? styles.themeSwitchContainerDark : styles.themeSwitchContainer}>
                <Text style={temaEscuro ? styles.themeSwitchTextDark : styles.themeSwitchText}>
                    Modo Escuro
                </Text>
                <Switch 
                    value={temaEscuro}
                    onValueChange={toggleTema}
                    trackColor={{ false: '#767577', true: '#81C784' }}
                    thumbColor={temaEscuro ? '#BB86FC' : '#8A2BE2'}
                />
            </View>
        </View>
    )
}