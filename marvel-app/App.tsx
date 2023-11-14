import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Menu from './component/Menu';
import Characters from './component/characters'



export default function App() {
  return (
    <View style={styles.container}>
      <Menu />
      <Characters />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    marginBottom: 25,
    marginRight: 5,
    marginLeft: 5,

  },
  tinyLogo: {
    width: 500,
    height: 500,
  },
});
