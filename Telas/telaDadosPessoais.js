import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Frame4({ navigation }) {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [nomeResponsavel, setNomeResponsavel] = useState('');
  const [numeroEmerg, setNumeroEmerg] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [nasc, setNasc] = useState('');
  const [cpf, setCPF] = useState('');

  const handleAtualizar = () => {
    console.log('Atualizar dados:', { nomeCompleto, nomeResponsavel, numeroEmerg, cidade, estado, nasc, cpf });
    navigation.navigate('telaPrincipal'); // Navega para telaPrincipal após atualização
  };

  const handleExcluir = () => {
    console.log('Excluir dados:', { nomeCompleto, nomeResponsavel, numeroEmerg, cidade, estado, nasc, cpf});
    navigation.navigate('telaPrincipal'); // Navega para telaPrincipal após exclusão
  };

  return (
    <View style={styles.container}>
       
      <View style={styles.dados}>
      </View>
      <TextInput
        placeholder="Nome completo"
        value={nomeCompleto}
        onChangeText={setNomeCompleto}
        style={styles.input}
        placeholderTextColor="#4C0D62"
      />
      <TextInput
        placeholder="Nome completo do responsável"
        value={nomeResponsavel}
        onChangeText={setNomeResponsavel}
        style={styles.input}
        placeholderTextColor="#4C0D62"
      />
      <TextInput
        placeholder="Número de emergência"
        value={numeroEmerg}
        onChangeText={setNumeroEmerg}
        keyboardType="phone-pad"
        style={styles.input}
        placeholderTextColor="#4C0D62"
      />
      <TextInput
        placeholder="Cidade"
        value={cidade}
        onChangeText={setCidade}
        style={styles.input}
        placeholderTextColor="#4C0D62"
      />
      <TextInput
        placeholder="Estado"
        value={estado}
        onChangeText={setEstado}
        style={styles.input}
        placeholderTextColor="#4C0D62"
      />
      <TextInput
        placeholder="Data de Nascimento"
        value={nasc}
        onChangeText={setNasc}
        style={styles.input}
        placeholderTextColor="#4C0D62"
      />
      <TextInput
        placeholder="CPF"
        value={cpf}
        onChangeText={setCPF}
        style={styles.input}
        placeholderTextColor="#4C0D62"
      />
      <TouchableOpacity style={styles.btnAtualizar} onPress={handleAtualizar}>
          <Text style={styles.btnAtualizarText}>Atualizar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnExcluir} onPress={handleExcluir}>
          <Text style={styles.btnExcluirText}>Excluir</Text>
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
  dados: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    height: 45,
    width: 280,
    borderColor: '#4C0D62',
    borderWidth: 2,
    marginBottom: 15,
    paddingHorizontal: 8,
    color: 'white',
    borderRadius: 10,
  },
   btnAtualizar: {
    backgroundColor: '#4C0D62',
    padding: 10,
    borderRadius: 10,
    left: -80,
     width: 150,
    height: 45,
    top: 50,
  },
  btnAtualizarText: {
    color: 'white',
    fontFamily: 'verdana',
    fontSize: 20,
    right: -25,
  },
    btnExcluir: {
    backgroundColor: '#4C0D62',
    padding: 10,
    borderRadius: 10,
    width: 150,
    height: 45,
    right: -85,
     top: 5,
  },
  btnExcluirText: {
    color: 'white',
    fontFamily: 'verdana',
     fontSize: 20,
     right: -35,
  },
});
