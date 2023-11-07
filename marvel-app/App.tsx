import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titlepage}>Bienvenue aux Héros Marvel</Text>
      <Text>Choisis ton personnage</Text>
      <Image
        style={styles.tinyLogo}
        source={{uri: 'https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg'}}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 500,
    height: 500,
  },
  titlepage: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
