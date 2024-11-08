import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet } from 'react-native';

export default function telaLogin({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [usuarioErro, setUsuarioErro] = useState('');
  const [senhaErro, setSenhaErro] = useState('');

  const handleLogin = () => {
    let valid = true;

    setUsuarioErro('');
    setSenhaErro('');

    if (usuario === '') {
      setUsuarioErro('O nome de usuário é obrigatório');
      valid = false;
    }

    if (senha === '') {
      setSenhaErro('A senha é obrigatória');
      valid = false;
    }
     //fazer banco de dados para funcionamento
    if (valid) {
      if (usuario === 'admin' && senha === 'senha') {
        Alert.alert('Login Successful');
        navigation.navigate('Frame'); 
      } else {
        Alert.alert('Nome de usuário ou senha inválidos');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.caixa}>
        <TextInput
          placeholder="Nome do usuário"
          value={usuario}
          onChangeText={setUsuario}
          style={styles.input}
          placeholderTextColor="white"
        />
        {usuarioErro ? <Text style={styles.erro}>{usuarioErro}</Text> : null}
        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="white"
        />
        {senhaErro ? <Text style={styles.erro}>{senhaErro}</Text> : null}
        <TouchableOpacity style={styles.btnEntrar} onPress={handleLogin}>
          <Text style={{ color: 'white', fontFamily: 'verdana' }}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.linkCadastro}
        onPress={() => navigation.navigate('telaCadastro')} 
      >
        <Text style={{ color: '#12035c', fontFamily: 'verdana', top: 20 }}>
          Não tem uma conta? Inscreva-se!
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dacadd',
  },
  title: {
    color: '#4c0d62',
    fontFamily: 'verdana',
    top: -120,
    fontSize: 50,
    fontWeight: 'bold',
  },
  caixa: {
    backgroundColor: '#4C0D62',
    padding: 20,
    borderRadius: 20,
    width: 280,
    height: 280,
    top: -50,
  },
  btnEntrar: {
    backgroundColor: '#835691',
    borderRadius: 10,
    width: 150,
    height: 30,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    left: 40,
  },
  linkCadastro: {
    marginTop: -40,
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 8,
    color: 'white',
    borderRadius: 10,
    marginTop: 15,
  },
  erro: {
    color: 'white',
    marginBottom: 8,
    fontWeight: 'bold',
  },
});
