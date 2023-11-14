import * as React from 'react';
import { View, Text, SectionList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const url = "https://gateway.marvel.com/Characters";
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erreur de requête : ${response.status}`);
    }
    
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });


function HomeScreenCharacteres() {
   return (
    <Text></Text>
//     //<SectionList />
   );
}

const Stack = createNativeStackNavigator();

export default function Characters() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreenCharacteres} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}