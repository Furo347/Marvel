// App.tsx
import React from 'react';
import Accueil from './component/accueil';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Movies from './component/films';
import CharacterDetails from './component/characterdetails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import FilmsDetails from './component/filmdetails';
import SearchPage from './component/searchpage';
import AllgoodCharacter from './component/allcharactergood';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import GoodCharacter from './component/goodcharacter';
import BadCharacter from './component/badcharacter';

const Stack = createStackNavigator();

const queryClient = new QueryClient();

export default function App() {
  return (
    <SafeAreaProvider>
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Personnages" component={Accueil}/>
          <Stack.Screen name="Films" component={Movies} />
          <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
          <Stack.Screen name="FilmsDetails" component={FilmsDetails} />
          <Stack.Screen name="SearchPage" component={SearchPage} />
          <Stack.Screen name="AllgoodCharacter" component={GoodCharacter} />
          <Stack.Screen name="AllbadCharacter" component={BadCharacter} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
    </SafeAreaProvider>
  );
}
