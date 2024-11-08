import * as React from "react";
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { Image } from "expo-image";

export default function telaDadosMédicos({navigation}) {
  const [estagios, setEstagios] = useState('');
  const [alergias, setAlergias] = useState('');
  const [medicamentos, setMedicamentos] = useState('');
  const [doencas, setDoencas] = useState('');
  const [fobias, setFobias] = useState('');
   const [tipo_sang, setTiposang] = useState('');
  const handleAtualizar = () => {
    console.log("Dados atualizados:", { estagios, alergias, medicamentos, doencas, fobias, tipo_sang, });
  navigation.navigate('telaPrincipal'); // Navega para telaPrincipal após atualização
  };
   const handleExcluir = () => {
    console.log("Dados Excluidos:", { estagios, alergias, medicamentos, doencas, fobias, tipo_sang,});
  navigation.navigate('telaPrincipal'); // Navega para telaPrincipal após atualização
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Estágio"
          value={estagios}
          onChangeText={setEstagios}
          style={styles.input}
          placeholderTextColor="#4C0D62"
        />
        <TextInput
          placeholder="Alergias"
          value={alergias}
          onChangeText={setAlergias}
          style={styles.input}
          placeholderTextColor="#4C0D62"
        />
        <TextInput
          placeholder="Medicamentos"
          value={medicamentos}
          onChangeText={setMedicamentos}
          style={styles.input}
          placeholderTextColor="#4C0D62"
        />
        <TextInput
          placeholder="Doenças Complementares"
          value={doencas}
          onChangeText={setDoencas}
          style={styles.input}
          placeholderTextColor="#4C0D62"
        />
        <TextInput
          placeholder="Fobias"
          value={fobias}
          onChangeText={setFobias}
          style={styles.input}
          placeholderTextColor="#4C0D62"
        />
           <TextInput
          placeholder="Tipo Sanguíneo"
          value={tipo_sang}
          onChangeText={setTiposang}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dacadd',
  },
  input: {
    height: 40,
    width: 250,
    borderColor: '#4C0D62',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 8,
    color: 'white',
    borderRadius: 10,
    marginTop: 15,
    top:-30,
   
  }, 
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
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
