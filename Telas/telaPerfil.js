import React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';

export default function telaPerfil() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topo}>
        <Image style={styles.perfil} source={require('../assets/perfil.png')} />
        <Text style={styles.nome}>Nome Completo</Text>
      </View>
      <View style={styles.container2}>

        <Text style={styles.titulo}>Dados Pessoais</Text>
        <Text style={styles.texto}>Nome do Responsável:</Text>
        <Text style={styles.texto}>Contato de Emergência:</Text>
        <Text style={styles.texto}>Cidade:</Text>
        <Text style={styles.texto}>Estado:</Text>
        <Text style={styles.texto}>Data de Nascimento:</Text>
        <Text style={styles.texto}>CPF:</Text>

         <Text style={styles.titulo}>Dados Médicos</Text>
        <Text style={styles.texto}>Estágio:</Text>
        <Text style={styles.texto}> Alergias:</Text>
        <Text style={styles.texto}>Medicamentos:</Text>
        <Text style={styles.texto}>Doenças Complementares:</Text>
        <Text style={styles.texto}>Fobias:</Text>
        <Text style={styles.texto}>Tipo Sanguíneo:</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#dacadd',
    padding: 10,
  },
  topo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  perfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20, 
    marginTop: 20,
  },
  nome: {
    fontSize: 25,
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    color: '#4C0D62',
  },
  container2: {
    backgroundColor: '#4C0D62',
    padding: 20,
    borderRadius: 20,
    width: '90%',
    maxWidth: 400,
  },
  texto: {
    color: 'white',
    fontSize: 16,
    marginBottom: 12,
  },
  titulo: {
 fontSize: 25,
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    color: 'white',
     marginBottom: 12,
  },
});
