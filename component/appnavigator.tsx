//appnavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ComicsScreen from './comicsscreen'; // Assurez-vous de spécifier le bon chemin

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Autres écrans que vous pourriez avoir */}
      <Stack.Screen name="ComicsScreen" component={ComicsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
