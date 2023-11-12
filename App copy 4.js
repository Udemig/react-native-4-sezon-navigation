import {View, Text, Button} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DetailScreen from './src/pages/DetailScreen';
import HomeScreen from './src/pages/HomeScreen';
import LoginScreen from './src/pages/LoginScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          headerStyle: {
            backgroundColor: 'tomato',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 16,
          },
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <Icon name="home" size={30} color="tomato" />,
          }}
        />
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="rocket" size={30} color="tomato" />,
          }}
        />
        <Drawer.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            title: 'Detay',
            tabBarIcon: () => <Icon name="user" size={30} color="tomato" />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
