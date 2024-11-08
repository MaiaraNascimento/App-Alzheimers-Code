import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const telaInicial = () => {
  const navigation = useNavigation();

  const handleNavigationParaLogin = () => {
    navigation.navigate('telaLogin');
  };

  const handleNavigationParaCadastro = () => {
    navigation.navigate('telaCadastro');
  };
  
  

  return (
    <View style={styles.container}>
      <Image style={styles.lg} source={require('../assets/memorytech.png')} />
      <Image
        style={styles.img}
        resizeMode="cover"
        source={require('../assets/fnBotao.png')}
      />
      <TouchableOpacity
        style={styles.btnEntrar}
        onPress={handleNavigationParaLogin}>
        <Text style={{ color: 'white', fontFamily: 'verdana', fontSize: 20}}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.linkCadastro}
        onPress={handleNavigationParaCadastro}>
        <Text style={{ color: 'white', fontFamily: 'verdana', top: 20 }}>
          Não tem uma conta? Inscreva-se!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4C0D62',
  },
  lg: {
    width: 350,
    height: 450,
    marginBottom: 20,
  },
  img: {
    top: 400,
    left: 84,
    borderRadius: 5,
    width: 122,
    height: 39,
  },
  btnEntrar: {
    backgroundColor: '#835691',
    borderRadius: 10,
    width: 165,
    height: 40,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkCadastro: {
    marginTop: 20,
  },
});

export default telaInicial;
