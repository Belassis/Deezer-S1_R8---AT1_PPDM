import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import GeneroScreen from './src/screens/GeneroScreen';
import ArtistaScreen from './src/screens/ArtistaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GeneroScreen" component={GeneroScreen} options={{ title: 'Gêneros' }} />
        <Stack.Screen name="ArtistaScreen" component={ArtistaScreen} options={{ title: 'Artistas' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}