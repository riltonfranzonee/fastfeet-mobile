import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

const Stack = createStackNavigator();

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {signed ? (
          <Stack.Screen name="Dashboard" component={Dashboard} />
        ) : (
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerMode: 'screen', headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
