import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import YogaTypesScreen from './src/screens/YogaTypesScreen';
import VideosScreen from './src/screens/VideoScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import ProgressScreen from './src/screens/ProgressScreen';

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#83f53d',
    background: '#ffffff',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#83f53d',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: 'white' },
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            if (route.name === 'YogaTypes') {
              iconName = 'body-outline';
            } else if (route.name === 'Videos') {
              iconName = 'videocam-outline';
            } else if (route.name === 'Favorites') {
              iconName = 'heart-outline';
            } else if (route.name === 'Progress') {
              iconName = 'bar-chart-outline';
            } else {
              iconName = 'help-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="YogaTypes" component={YogaTypesScreen} />
        <Tab.Screen name="Videos" component={VideosScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Progress" component={ProgressScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
