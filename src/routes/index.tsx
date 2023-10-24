import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../views/Home';
import { Profile } from '../views/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const { Navigator, Screen } = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarHideOnKeyboard: true
      }}>
        <Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => <Icon name='home' size={size} color={color} />,
            headerShown: false
          }}
        />
        <Screen
          name='Profile'
          component={Profile}
          options={{
            tabBarIcon: ({ size, color }) => <Icon name='account' size={size} color={color} />
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}