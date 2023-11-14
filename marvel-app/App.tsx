import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Menu from './component/Menu';


export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD

      <Menu />

=======
      <Menu />
>>>>>>> 4b45feeb048f710aa9c652a7c5a50ae3b6607978
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: 500,
    height: 500,
  },
});
