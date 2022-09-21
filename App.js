import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image, Linking, ScrollView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function Home() {
  return (
    <View style={styles.homeContainer}> 

      <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', marginVertical: 10 }}>
        <View style={{ borderWidth: 1, width: '30%', alignSelf: 'center' }}></View>
        <View style={{ borderWidth: 2, height: 30, width: 30, borderRadius: 100, marginHorizontal: 10 }}></View>
        <View style={{ borderWidth: 1, width: '30%', alignSelf: 'center' }}></View>
      </View>


      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', width: '100%', height: '100%' }}>



        <View style={{ width: '90%', height: '100%', backgroundColor: 'rgba(228, 208, 10, 0.7)', borderRadius: 10, padding: 15, }}>
          <Text style={{ alignSelf: 'center', fontSize: 20, fontFamily: 'monospace' }}>Seja bem vindo(a)!</Text>

          <View style={{ width: '90%', borderWidth: 0.1, alignSelf: 'center', marginVertical: 5 }}></View>

          <Text style={{ fontSize: 16, textAlign: 'justify', fontFamily: 'monospace', marginBottom:10 }}>Nesse aplicativo você poderá usar o leitor de QR code. Recomendamos que você acesse nossos sites:</Text>
          <Text style={{ fontSize: 15, textAlign: 'justify', fontFamily: 'monospace', marginBottom:10  }}> • Febre amarela <Text style={{fontSize: 10}}>(Por Cauã "socoro")</Text></Text>
          <Text style={{ fontSize: 15, textAlign: 'justify', fontFamily: 'monospace', marginBottom:10  }}> • Tétano <Text style={{fontSize: 10}}>(Por Kauan "soos")</Text></Text>
          
          <Text style={{ fontSize: 11, textAlign: 'justify', fontFamily: 'monospace' }}>(ou acessar qualquer outro conteúdo que precise de um leitor de qr 🐊)</Text>

          <Text style={{ fontSize: 16, marginTop: 40, textAlign: 'justify', fontFamily: 'monospace' }}>Espero que goste do conteúdo e dos sites (e que tudo de certo 🙏) .</Text>

          <Image style={{ width: 324, height: 200, alignSelf: 'center', marginTop: 50 }} source={require('./assets/cuzinhohoje.png')} />
        </View>



      </View>
    </View>
  );
}

function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Linking.openURL(`${data}`);
  };

  if (hasPermission === null) {
    return <Text>Aguardando permissão de camera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso a camera</Text>;
  }



  return (
    <View style={styles.scannerContainer}>

      <View style={styles.scannerHolder}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.scanner}
        />
      </View>

      <View style={{ width: 250, height: 250, borderWidth: 1, borderColor: '#fefce8', borderRadius: 10, position: 'absolute', backgroundColor: 'rgba(254, 252, 232, 0.1)', }}></View>

      {scanned && <TouchableOpacity blurRadius={1000} style={styles.botaoScanner} onPress={() => setScanned(false)}><EvilIcons name="search" size={50} color="gray" /></TouchableOpacity>}
      {scanned && <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#ffffff', marginTop: 10, fontFamily: 'monospace' }}>Toque para escanear novamente</Text>}

    </View>
  );
}




function Devs() {
  return (

    <View style={styles.devContainer}>
      <ScrollView>
      <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', marginVertical: 10 }}>
        <View style={{ borderWidth: 1, width: '25%', alignSelf: 'center' }}></View>
        <View style={{ borderWidth: 2, height: 30, width: 30, borderRadius: 100, marginHorizontal: 10 }}></View>
        <View style={{ borderWidth: 1, width: '25%', alignSelf: 'center' }}></View>
      </View>
      <View style={{ width: 300, height: 300, backgroundColor: 'rgba(228, 208, 10, 0.5)', borderRadius: 1000, overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', borderWidth: 1 }}>
        <Image style={{ width: 300, height: 210 }} source={require('./assets/burasau.png')} />
        <Text style={{ fontFamily: 'monospace' }}>Cauã Gustavo de Souza Mesquita</Text>
        <Text style={{ fontFamily: 'monospace' }}>3°DS</Text>
        <Text style={{ fontFamily: 'monospace', fontSize: 10 }}>Socoro</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', marginVertical: 10 }}>
        <View style={{ borderWidth: 1, width: '25%', alignSelf: 'center' }}></View>
        <View style={{ borderWidth: 2, height: 30, width: 30, borderRadius: 100, marginHorizontal: 10 }}></View>
        <View style={{ borderWidth: 1, width: '25%', alignSelf: 'center' }}></View>
      </View>
      <View style={{ width: 300, height: 300, backgroundColor: 'rgba(228, 208, 10, 0.5)', borderRadius: 1000, overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', borderWidth: 1 }}>
        <Image style={{ width: 300, height: 210 }} source={require('./assets/kaua.jpg')} />
        <Text style={{ fontFamily: 'monospace', }}>Kauan Matheus B. de Oliveira</Text>
        <Text style={{ fontFamily: 'monospace' }}>3°DS</Text>
        <Text style={{ fontFamily: 'monospace', fontSize: 10 }}>Soos</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', marginVertical: 10 }}>
        <View style={{ borderWidth: 1, width: '25%', alignSelf: 'center' }}></View>
        <View style={{ borderWidth: 2, height: 30, width: 30, borderRadius: 100, marginHorizontal: 10 }}></View>
        <View style={{ borderWidth: 1, width: '25%', alignSelf: 'center' }}></View>
      </View>
      </ScrollView>   
       </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color="black" />)
        }} />


        <Tab.Screen name="Scanner" component={Scanner} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="qr-code-scanner" size={24} color="black" />)
        }} />



        <Tab.Screen name="Devs" component={Devs} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={24} color="black" />)
        }} />



      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  scannerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    textAlign: 'center'
  },

  scanner: {
    width: 700,
    height: 650,

  },

  scannerHolder: {
    position: 'absolute',
  },

  botaoScanner: {
    width: 75,
    height: 75,
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '120%',
  },
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#fefce8',
    paddingTop: 50,
  },

  devContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefce8',
    paddingVertical: 20
  }
});