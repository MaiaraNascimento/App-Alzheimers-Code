import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth'; 
import { auth, firestore } from '../firebaseConfig'; // Importando Firebase e Firestore
import { doc, setDoc } from 'firebase/firestore'; // Função para salvar dados no Firestore

export default function TelaCadastro() {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [nomeResponsavel, setNomeResponsavel] = useState('');
  const [numeroEmerg, setNumeroEmerg] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [nomeCompletoErro, setNomeCompletoErro] = useState('');
  const [nomeResponsavelErro, setNomeResponsavelErro] = useState('');
  const [numeroEmergErro, setNumeroEmergErro] = useState('');
  const [emailErro, setEmailErro] = useState('');
  const [senhaErro, setSenhaErro] = useState('');

  const handleCadastro = () => {
    let valid = true;
    setNomeCompletoErro('');
    setNomeResponsavelErro('');
    setNumeroEmergErro('');
    setEmailErro('');
    setSenhaErro('');

    if (nomeCompleto === '') {
      setNomeCompletoErro('Nome completo é obrigatório');
      valid = false;
    }

    if (nomeResponsavel === '') {
      setNomeResponsavelErro('Nome do responsável é obrigatório');
      valid = false;
    }

    if (numeroEmerg === '') {
      setNumeroEmergErro('Número de emergência é obrigatório');
      valid = false;
    }

    if (email === '') {
      setEmailErro('Email é obrigatório');
      valid = false;
    }

    if (senha === '') {
      setSenhaErro('Senha é obrigatória');
      valid = false;
    }

    if (valid) {
      // Registrar no Firebase Authentication
      createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          // Usuário registrado com sucesso
          const user = userCredential.user;
          
          // Salvar os dados do usuário no Firestore
          const userRef = doc(firestore, 'usuarios', user.uid); // Usando o UID do Firebase Auth
          setDoc(userRef, {
            nomeCompleto,
            nomeResponsavel,
            numeroEmerg,
            email,
          })
            .then(() => {
              Alert.alert('Cadastro bem-sucedido!');
              console.log('Usuário registrado e dados salvos no Firestore:', user);
              // Você pode redirecionar para a tela de login ou para a tela principal
            })
            .catch((error) => {
              Alert.alert('Erro ao salvar dados no Firestore', error.message);
              console.error('Erro ao salvar dados no Firestore:', error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === 'auth/email-already-in-use') {
            Alert.alert('Erro', 'Este email já está em uso.');
          } else if (errorCode === 'auth/invalid-email') {
            Alert.alert('Erro', 'O email fornecido é inválido.');
          } else if (errorCode === 'auth/weak-password') {
            Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
          } else {
            Alert.alert('Erro', errorMessage);
          }
          console.error('Erro ao cadastrar usuário:', errorCode, errorMessage);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>
      <View style={styles.caixa}>
        <View style={styles.container2}>
          <TextInput
            placeholder="Nome completo"
            value={nomeCompleto}
            onChangeText={setNomeCompleto}
            style={styles.input}
            placeholderTextColor="white"
          />
          {nomeCompletoErro ? <Text style={styles.erro}>{nomeCompletoErro}</Text> : null}

          <TextInput
            placeholder="Nome completo do responsável"
            value={nomeResponsavel}
            onChangeText={setNomeResponsavel}
            style={styles.input}
            placeholderTextColor="white"
          />
          {nomeResponsavelErro ? <Text style={styles.erro}>{nomeResponsavelErro}</Text> : null}

          <TextInput
            placeholder="Número de emergência"
            value={numeroEmerg}
            onChangeText={setNumeroEmerg}
            keyboardType="phone-pad"
            style={styles.input}
            placeholderTextColor="white"
          />
          {numeroEmergErro ? <Text style={styles.erro}>{numeroEmergErro}</Text> : null}

          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.input}
            placeholderTextColor="white"
          />
          {emailErro ? <Text style={styles.erro}>{emailErro}</Text> : null}

          <TextInput
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            style={styles.input}
            placeholderTextColor="white"
          />
          {senhaErro ? <Text style={styles.erro}>{senhaErro}</Text> : null}
        </View>

        <TouchableOpacity style={styles.btnCadastrar} onPress={handleCadastro}>
          <Text style={{ color: 'white', fontFamily: 'verdana' }}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#dacadd',
  },
  titulo: {
    color: '#4C0D62',
    fontFamily: 'verdana',
    top: -30,
    fontSize: 60,
    fontWeight: 'bold',
    left: 65,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'white',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 8,
    color: 'white',
    borderRadius: 10,
  },
  caixa: {
    backgroundColor: '#4C0D62',
    padding: 20,
    borderRadius: 20,
    width: 300,
    left: 50,
    justifyContent: 'space-between',
  },
  container2: {
    flexGrow: 1,
  },
  erro: {
    color: 'white',
    marginBottom: 8,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'left',
  },
  btnCadastrar: {
    backgroundColor: '#835691',
    borderRadius: 10,
    width: 180,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },});
