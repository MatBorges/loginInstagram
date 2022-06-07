import { StatusBar } from 'expo-status-bar';
// import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' translucent={false} />

      {/* <Image
        source={require('./src/assets/logo_instagram.png')}
        style={styles.logo}
        
      /> */}
      
      <TextInput
        placeholder='Celular, username ou email'
        style={styles.input}
      />

      <TextInput
        placeholder='Sua Senha'
        style={styles.input}
      />

      <View style={styles.forgotPass}>
        <TouchableOpacity>
          <Text style={styles.forgotPassText}>
            Esqueceu sua senha?
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text styles={styles.loginText}>
          Acessar
        </Text>
      </TouchableOpacity>

      {/* Distancia Variavel do android e iOS */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
