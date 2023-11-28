// App.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Accueil from './component/accueil';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Comics from './component/comicsscreen';
import Movies from './component/films';
import CharacterDetails from './component/characterdetails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Stack = createStackNavigator();

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Personnages" component={Accueil} />
          <Stack.Screen name="Comics" component={Comics} />
          <Stack.Screen name="Films" component={Movies} />
          <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}