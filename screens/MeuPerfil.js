import React, { useContext } from 'react';
import { Pressable, Text, View, Switch } from 'react-native';
import styles from '../styles';
import { TemaContext } from '../TemaContext';
import { AuthContext } from '../AuthContext';

export default function MeuPerfil (){
    const { temaEscuro, toggleTema } = useContext(TemaContext);
    const { usuario, sair } = useContext(AuthContext);

    return(
        <View style={temaEscuro ? styles.settingsContainerDark : styles.settingsContainer}>
            <Text style={temaEscuro ? styles.textoTituloDark : styles.textoTitulo}>Configurações</Text>
            <Text style={temaEscuro ? styles.textoSubtituloDark : styles.textoSubtitulo}>Ajuste suas preferências e configurações.</Text>

            <View style={temaEscuro ? styles.themeSwitchContainerDark : styles.themeSwitchContainer}>
                <Text style={temaEscuro ? styles.themeSwitchTextDark : styles.themeSwitchText}>
                    Usuário logado
                </Text>
                <Text style={temaEscuro ? styles.textoSubtituloDark : styles.textoSubtitulo}>
                    {usuario?.nome || usuario?.email || 'Sem usuário'}
                </Text>
            </View>
            
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

            <Pressable
                onPress={sair}
                style={({ pressed }) => [
                    {
                        marginTop: 20,
                        paddingVertical: 14,
                        borderRadius: 12,
                        backgroundColor: pressed ? '#c0392b' : '#e74c3c',
                        alignItems: 'center',
                    },
                ]}
            >
                <Text style={{ color: '#fff', fontWeight: '800' }}>Sair da conta</Text>
            </Pressable>
        </View>
    )
}