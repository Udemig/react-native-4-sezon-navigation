import {View, Text, Button} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DetailScreen from './src/pages/DetailScreen';
import HomeScreen from './src/pages/HomeScreen';
import LoginScreen from './src/pages/LoginScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Feed1"
        component={HomeScreen}
        options={{title: 'Account', headerShown: false}}
      />
      <Stack.Screen
        name="Feed2"
        component={DetailScreen}
        options={{title: 'Feed'}}
      />
    </Stack.Navigator>
  );
};

const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Account1"
        component={HomeScreen}
        options={{title: 'Account'}}
      />
      <Stack.Screen
        name="Account2"
        component={DetailScreen}
        options={{title: 'Feed'}}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          title: 'Feed',
          tabBarIcon: () => <Icon name="feed" size={30} color="tomato" />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: () => <Icon name="home" size={30} color="tomato" />,
        }}
      />
    </Tab.Navigator>
  );
};

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
          component={TabNavigator}
          options={{
            tabBarIcon: () => <Icon name="home" size={30} color="tomato" />,
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
