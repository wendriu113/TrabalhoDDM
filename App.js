import 'react-native-gesture-handler'; 
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { AuthProvider, AuthContext } from './AuthContext';
import { TemaProvider, TemaContext } from './TemaContext';
import { FavoritosProvider, FavoritosContext } from './FavoritosContext';
import { TimeProvider, TimeContext } from './TimeContext';

import Home from './screens/Home';
import Detalhes from './screens/Detalhes';
import Explorar from './screens/Explorar';
import Favoritos from './screens/Favoritos';
import MeuPerfil from './screens/MeuPerfil';
import Autenticacao from './screens/Autenticacao';
import TelaDrawer1 from './screens/TelaDrawer1'; // 
import TelaDrawer2 from './screens/TelaDrawer2'; //
import TelaDrawer3 from './screens/TelaDrawer3'; //

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function HomeDrawer() {
  return (
    <Drawer.Navigator>
      
      <Drawer.Screen name="HomePrincipal" component={Home} options={{ title: 'Destaques' }} />
      <Drawer.Screen name="TelaDrawer1" component={TelaDrawer1} options={{ title: 'Configurar Time' }} />
      <Drawer.Screen name="TelaDrawer2" component={TelaDrawer2} options={{ title: 'Ouvir Pokémons' }} />
      <Drawer.Screen name="TelaDrawer3" component={TelaDrawer3} options={{ title: 'Cadastrar Pokémon' }} />
    </Drawer.Navigator>
  );
}


function HomeStack() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="HomeDrawer" component={HomeDrawer} options={{ headerShown: false }} />
      <Stack.Screen name="Detalhes" component={Detalhes} options={{ title: 'Detalhes do Pet' }} />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: "#8A2BE2",
        tabBarActiveBackgroundColor: "#F8C8DC",
        tabBarInactiveTintColor: "#a0a0a0",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '900',
        }
      }}>
      
      {/* A aba Inicio aponta para o Stack, que aponta para o Drawer, que mostra a Home! */}
      <Tab.Screen name="Inicio" component={HomeStack}
        options={{
          headerShown: false, // Esconde o cabeçalho da Tab para não dar conflito
          tabBarIcon: ({color, size}) => <Icon name='pokeball' size={size} color={color}/>
        }}
      />
      <Tab.Screen name="Explorar" component={Explorar}
        options={{
          tabBarIcon: ({color, size}) => <Icon name='card-bulleted' size={size} color={color}/>
        }}
      />
      <Tab.Screen name="Favoritos" component={Favoritos}
        options={{
          tabBarIcon: ({color, size}) => <Icon name='dna' size={size} color={color}/>
        }}
      />
      <Tab.Screen name="Configurações" component={MeuPerfil}
        options={{
          tabBarIcon: ({color, size}) => <Icon name='cog' size={size} color={color}/>,
        }}
      />
      </Tab.Navigator>
      <StatusBar style="auto"/>
    </NavigationContainer>
  );
}

function LoadingScreen() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#8A2BE2" />
      <Text style={styles.loadingText}>Carregando seus dados...</Text>
    </View>
  );
}

function AppContent() {
  const { carregandoDados: carregandoTema } = useContext(TemaContext);
  const { carregandoDados: carregandoFavoritos } = useContext(FavoritosContext);
  const { carregandoDados: carregandoTime } = useContext(TimeContext);

  if (carregandoTema || carregandoFavoritos || carregandoTime) {
    return <LoadingScreen />;
  }

  return <AppNavigator />;
}

function RootContent() {
  const { usuario, carregandoBanco } = useContext(AuthContext);

  if (carregandoBanco) {
    return <Autenticacao modoCarregamento />;
  }

  if (!usuario) {
    return <Autenticacao />;
  }

  return (
    <TemaProvider usuarioId={usuario.id}>
      <FavoritosProvider usuarioId={usuario.id}>
        <TimeProvider usuarioId={usuario.id}>
          <AppContent />
        </TimeProvider>
      </FavoritosProvider>
    </TemaProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7FAFC',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
});

export default function App() {
  return (
    <AuthProvider>
      <RootContent />
    </AuthProvider>
  );
}



