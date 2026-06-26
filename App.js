import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import RecipesListScreen from './src/screens/RecipesListScreen';
import RecipeFormScreen from './src/screens/RecipeFormScreen';
import RecipeDetailsScreen from './src/screens/RecipeDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#FFF8F0' }
        }}
      >
        <Stack.Screen name="RecipesList" component={RecipesListScreen} />
        <Stack.Screen name="RecipeForm" component={RecipeFormScreen} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
