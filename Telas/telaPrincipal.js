import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const telaPrincipal = () => {
  const navigation = useNavigation(); // obtém a função de navegação

  // função para lidar com o pressionamento dos botões
  const handlebtnpressionado = (telaPressionada) => {
    if (telaPressionada === "Dados Pessoais") {
      navigation.navigate("Dados Pessoais");
    } else if (telaPressionada === "Dados Médicos") {
      navigation.navigate("Dados Médicos");
    } else if (telaPressionada === "Bloco de Notas") {
      navigation.navigate("Bloco de Notas");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botoes}
        onPress={() => handlebtnpressionado("Dados Pessoais")}
      >
        <Image source={require("../assets/pessoais.png")} style={styles.img} />
        <Text style={styles.txt}>Dados Básicos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botoes}
        onPress={() => handlebtnpressionado("Dados Médicos")}
      >
        <Image source={require("../assets/sd.png")} style={styles.img} />
        <Text style={styles.txt}>Dados Médicos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botoes}
        onPress={() => handlebtnpressionado("Bloco de Notas")}
      >
        <Image source={require("../assets/bloco.png")} style={styles.img1} />
        <Text style={styles.txtbloco}>Bloco de Notas</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dacadd",
  },
  botoes: {
    backgroundColor: "#4C0D62",
    width: 300,
    height: 190,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  txt: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -30,
  },
  img: {
    width: 150,
    height: 150,
    marginTop: -30,
  },
  img1: {
    width: 180,
    height: 180,
    marginTop: -30,
  },
  txtbloco: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -50,
  },
});

export default telaPrincipal;
