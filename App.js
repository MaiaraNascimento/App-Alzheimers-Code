import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useFonts } from "expo-font";
import { View, Text, StyleSheet } from "react-native";

import telaInicial from "./Telas/telaInicial";
import telaLogin from "./Telas/telaLogin";
import telaCadastro from "./Telas/telaCadastro";
import telaPrincipal from "./Telas/telaPrincipal";
import telaDadosPessoais from "./Telas/telaDadosPessoais";
import telaDadosMedicos from "./Telas/telaDadosMedicos";
import telaBlocoNotas from "./Telas/telaBlocoNotas";
import telaPerfil from "./Telas/telaPerfil";

const firebaseConfig = {
  apiKey: "AIzaSyAfahl8C96JKB_LwZztgqJLq4y6TM20Nf8",
  authDomain: "alzheimers-code.firebaseapp.com",
  projectId: "alzheimers-code",
  storageBucket: "alzheimers-code.firebasestorage.app",
  messagingSenderId: "341205586662",
  appId: "1:341205586662:web:87d1af6f4570b525716127",
  measurementId: "G-0DD9GN4P8G"
};
// Inicializando o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);  // Inicializando o Firestore
 
export { auth, db };  // Exportando `auth` e `db` para serem utilizados em outros arquivos
//criação navegadores
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
        initialRouteName="NavegadorStack"
        drawerContent={(props) => <EstiloDrawer {...props} />}
        screenOptions={{
          headerStyle: {
             backgroundColor: "#4C0D62", // cor de fundo do cabeçalho
          },
          headerTintColor: "white", // cor do texto do cabeçalho
          headerTitleStyle: {
            fontWeight: "bold", // estilo do título do cabeçalho
            color: "white",
          },
        }}
      >
      
        <Drawer.Screen name="Tela Inicial" component={NavegadorStack}/>
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
    backgroundColor: "#4C0D62", //cor de fundo do drawer
  },
  cabecalho: {
    padding: 20,
    backgroundColor: "#3D2A57", // cor de fundo da parte opções
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





 