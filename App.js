// In App.js in a new project

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './src/routes';

const Stack = createNativeStackNavigator();

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Loader' screenOptions={{
        headerShown: false
      }}>
        {routes.map(route => (
          <Stack.Screen key={route.path} name={route.path} component={route.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;