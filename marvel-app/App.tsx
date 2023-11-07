import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text>COUCOU</Text>
=======
      <Text>Hello You</Text>
      <Image
        style={styles.tinyLogo}
        source={{uri: 'https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg'}}
      />
>>>>>>> be4b0dca280a4faee3ab533269f2fd4161f6cc14
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
