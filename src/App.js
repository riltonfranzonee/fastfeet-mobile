import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PropTypes from 'prop-types';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Details from './pages/Details';
import RegisterProblem from './pages/RegisterProblem';
import ViewProblem from './pages/ViewProblem';
import Confirm from './pages/Confirm';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  function DashboardRoot() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerMode: 'screen', headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerBackTitleVisible: false,
            headerTitle: 'Detalhes da encomenda',
            headerTitleStyle: { fontWeight: 'bold' },
            headerTransparent: true,
            headerTintColor: '#ffffff',
          }}
        />
        <Stack.Screen
          name="RegisterProblem"
          component={RegisterProblem}
          options={{
            headerBackTitleVisible: false,
            headerTitle: 'Informar problema',
            headerTitleStyle: { fontWeight: 'bold' },
            headerTransparent: true,
            headerTintColor: '#ffffff',
          }}
        />
        <Stack.Screen
          name="ViewProblem"
          component={ViewProblem}
          options={{
            headerBackTitleVisible: false,
            headerTitle: 'Visualizar problemas',
            headerTitleStyle: { fontWeight: 'bold' },
            headerTransparent: true,
            headerTintColor: '#ffffff',
          }}
        />
        <Stack.Screen
          name="Confirm"
          component={Confirm}
          options={{
            headerBackTitleVisible: false,
            headerTitle: 'Confirmar entrega',
            headerTitleStyle: { fontWeight: 'bold' },
            headerTransparent: true,
            headerTintColor: '#ffffff',
          }}
        />
      </Stack.Navigator>
    );
  }

  function Root() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#7D40E7',
          inactiveTintColor: '#999999',
          labelStyle: {
            fontSize: 13,
            marginTop: -10,
          },
          tabStyle: {
            height: 55,
          },
        }}
      >
        <Tab.Screen
          name="Entregas"
          component={DashboardRoot}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="reorder-horizontal"
                size={26}
                color={focused ? '#7D40E7' : '#999999'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Meu Perfil"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="account-circle"
                size={26}
                color={focused ? '#7D40E7' : '#999999'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {signed ? (
          <Stack.Screen
            name="Root"
            component={Root}
            options={{ headerMode: 'screen', headerShown: false }}
          />
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

App.propTypes = {
  focused: PropTypes.bool,
};
