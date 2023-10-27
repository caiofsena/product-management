import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../views/Home';
import { Profile } from '../views/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../theme';
import { Detail } from '../views/Detail';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { Login } from '../views/Login';

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();

export function Routes() {
  function ProductStack() {
    return (
      <Tab.Navigator 
        sceneContainerStyle={{backgroundColor: colors.gray100}} 
        screenOptions={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
          tabBarHideOnKeyboard: true
        }}>
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => <Icon name='home' size={size} color={color} />,
            headerShown: false
          }}
        />
        <Tab.Screen
          name='Profile'
          component={Profile}
          options={{
            tabBarIcon: ({ size, color }) => <Icon name='account' size={size} color={color} />
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}  options={{ headerShown: false }} />
        <Stack.Screen name='Products' component={ProductStack} options={{ headerShown: false }} />
        <Stack.Screen name='Detail' component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}