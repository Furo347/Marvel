import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Accueil from './component/accueil';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './component/appnavigator';
import { createStackNavigator } from '@react-navigation/stack';
import Comics from './component/comicsscreen';
import Movies from './component/films';
import Menu from './component/Menu';
import Characters from './component/characters'


const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
          <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Personnage" component={Accueil} />
  <Stack.Screen name="Comics" component={Comics} />
  <Stack.Screen name="Film" component={Movies} />
      </Stack.Navigator>
    </NavigationContainer>
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
