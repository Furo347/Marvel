import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello You</Text>
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
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
