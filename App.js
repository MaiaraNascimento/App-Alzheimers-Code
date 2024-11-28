import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

// Importando as telas
import telaInicial from "./Telas/telaInicial";
import telaLogin from "./Telas/telaLogin";
import telaCadastro from "./Telas/telaCadastro";
import telaPrincipal from "./Telas/telaPrincipal";
import telaDadosPessoais from "./Telas/telaDadosPessoais";
import telaDadosMedicos from "./Telas/telaDadosMedicos";
import telaBlocoNotas from "./Telas/telaBlocoNotas";
import telaPerfil from "./Telas/telaPerfil";

// Criação do Stack e Drawer
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function EstiloDrawer(props) {
  return (
    <DrawerContentScrollView {...props} style={estilos.conteudoDrawer}>
      <View style={estilos.cabecalho}>
        <Text style={estilos.textoCabecalho}>Opções</Text>
      </View>
      {props.state.routeNames.map((routeName, index) => (
        <DrawerItem
          key={routeName}
          label={routeName}
          onPress={() => props.navigation.navigate(routeName)}
          labelStyle={estilos.textoDrawer} 
        />
      ))}
    </DrawerContentScrollView>
  );
}

function NavegadorStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="telaInicial" component={telaInicial} />
      <Stack.Screen name="telaLogin" component={telaLogin} />
      <Stack.Screen name="telaCadastro" component={telaCadastro} />
      <Stack.Screen name="telaPrincipal" component={telaPrincipal} />
      <Stack.Screen name="telaDadosPessoais" component={telaDadosPessoais} />
      <Stack.Screen name="telaDadosMedicos" component={telaDadosMedicos} />
      <Stack.Screen name="telaBlocoNotas" component={telaBlocoNotas} />
      <Stack.Screen name="telaPerfil" component={telaPerfil} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Tela Inicial"
        drawerContent={(props) => <EstiloDrawer {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: "#4C0D62", // Cor de fundo do cabeçalho
          },
          headerTintColor: "white", // Cor do texto do cabeçalho
          headerTitleStyle: {
            fontWeight: "bold", // Estilo do título do cabeçalho
            color: "white",
          },
        }}
      >
        {/* Adicionando a tela inicial no Drawer e as outras opções */}
        <Drawer.Screen name="Tela Inicial" component={NavegadorStack} />
        <Drawer.Screen name="Perfil" component={telaPerfil} />
        <Drawer.Screen name="Tela Principal" component={telaPrincipal} />
        <Drawer.Screen name="Dados Pessoais" component={telaDadosPessoais} />
        <Drawer.Screen name="Dados Médicos" component={telaDadosMedicos} />
        <Drawer.Screen name="Bloco de Notas" component={telaBlocoNotas} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const estilos = StyleSheet.create({
  conteudoDrawer: {
    backgroundColor: "#4C0D62", // Cor de fundo do drawer
  },
  cabecalho: {
    padding: 20,
    backgroundColor: "#3D2A57", // Cor de fundo da parte de opções
  },
  textoCabecalho: {
    color: "white", 
    fontSize: 20,
    fontWeight: "bold",
  },
  textoDrawer: {
    color: "white", 
  },
});
