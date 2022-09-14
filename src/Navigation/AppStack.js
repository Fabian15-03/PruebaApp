import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// Importando las pantallas

import Login from '../Screens/Visitor/Login';
import Register from '../Screens/Visitor/Register';
import Home from '../Screens/Visitor/Home';

// Creando un stack para las pantallas.
const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen component={Login} name="login" />
        <Stack.Screen component={Register} name="register" />
        <Stack.Screen component={Home} name="home" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
