import React, { useContext, useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { AuthContext } from '../AuthContext';

export default function Autenticacao({ modoCarregamento = false }) {
  const { entrar, registrar, erroBanco, carregandoBanco } = useContext(AuthContext);
  const [modoRegistro, setModoRegistro] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [carregando, setCarregando] = useState(false);

  const estaCarregando = modoCarregamento || carregandoBanco;

  const emailValido = (valor) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(valor.trim());

  const limparMensagem = () => {
    setMensagem('');
  };

  const onSubmit = async () => {
    try {
      setCarregando(true);
      limparMensagem();

      if (modoRegistro && senha !== confirmarSenha) {
        setMensagem('As senhas não coincidem.');
        return;
      }

      if (modoRegistro && !emailValido(email)) {
        setMensagem('Digite um e-mail completo, como nome@dominio.com.');
        return;
      }

      if (modoRegistro) {
        await registrar({ nome, email, senha });
      } else {
        await entrar({ email, senha });
      }
    } catch (error) {
      setMensagem(error.message || 'Não foi possível concluir a operação.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <View style={styles.backgroundGlowTop} />
          <View style={styles.backgroundGlowBottom} />

          <View style={styles.card}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>SQLite local</Text>
            </View>

            <Text style={styles.title}>{modoRegistro ? 'Criar conta' : 'Entrar no app'}</Text>
            <Text style={styles.subtitle}>
              {modoRegistro
                ? 'Crie seu acesso para salvar o usuário localmente no banco SQLite.'
                : 'Entre com seu e-mail e senha para acessar o aplicativo.'}
            </Text>

            {modoRegistro ? (
              <TextInput
                placeholder="Seu nome"
                placeholderTextColor="#8A8A8A"
                value={nome}
                onChangeText={setNome}
                style={styles.input}
              />
            ) : null}

            <TextInput
              placeholder="E-mail"
              placeholderTextColor="#8A8A8A"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              style={styles.input}
            />

            <TextInput
              placeholder="Senha"
              placeholderTextColor="#8A8A8A"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              style={styles.input}
            />

            {modoRegistro ? (
              <TextInput
                placeholder="Confirmar senha"
                placeholderTextColor="#8A8A8A"
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                secureTextEntry
                style={styles.input}
              />
            ) : null}

            {mensagem ? <Text style={styles.errorText}>{mensagem}</Text> : null}
            {erroBanco ? <Text style={styles.errorText}>{erroBanco}</Text> : null}

            <Pressable style={styles.primaryButton} onPress={onSubmit} disabled={carregando || estaCarregando}>
              {carregando || estaCarregando ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.primaryButtonText}>
                  {modoRegistro ? 'Registrar' : 'Entrar'}
                </Text>
              )}
            </Pressable>

            <Pressable
              onPress={() => {
                setModoRegistro((value) => !value);
                limparMensagem();
                setSenha('');
                setConfirmarSenha('');
              }}
              disabled={carregando || estaCarregando}
            >
              <Text style={styles.switchText}>
                {modoRegistro ? 'Já tem conta? Entrar' : 'Não tem conta? Criar registro'}
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#07111F',
  },
  keyboardContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#07111F',
  },
  backgroundGlowTop: {
    position: 'absolute',
    top: -60,
    right: -40,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(33, 158, 188, 0.18)',
  },
  backgroundGlowBottom: {
    position: 'absolute',
    bottom: -70,
    left: -60,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: 'rgba(255, 183, 3, 0.16)',
  },
  card: {
    backgroundColor: '#F7FAFC',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.45)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.18,
    shadowRadius: 24,
    elevation: 8,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#DEF0FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 16,
  },
  badgeText: {
    color: '#0B4F6C',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#475569',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D6E3F0',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#0F172A',
    marginBottom: 12,
  },
  primaryButton: {
    minHeight: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F4C81',
    marginTop: 6,
    marginBottom: 14,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  switchText: {
    color: '#0B4F6C',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  errorText: {
    color: '#B42318',
    fontSize: 14,
    marginBottom: 12,
    fontWeight: '600',
  },
});