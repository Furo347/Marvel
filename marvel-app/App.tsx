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

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Personnages" component={Accueil} />
          <Stack.Screen name="Comics" component={Comics} />
          <Stack.Screen name="Films" component={Movies} />
        </Stack.Navigator>
      </NavigationContainer>
      <Menu />
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
