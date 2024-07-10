//import { Stack } from "expo-router";
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "@/source/Screens/LoginScreen";
import RegistrationScreen from "@/source/Screens/RegistrationScreen";
import DashboardScreen from "@/source/Screens/DashBoardScreen";
import EmergencyContactsScreen from "@/source/Screens/EmergencyContactsScreen";
import InstructionsScreen from "@/source/Screens/InstructionsScreen";
import ProfileSettingsScreen from "@/source/Screens/ProfileSettingsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


/** The BottomTab Navigator */
const MainTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="EmergencyContacts" component={EmergencyContactsScreen} options={{ tabBarLabel: 'Emergency Contacts' }} />
    <Tab.Screen name="Instructions" component={InstructionsScreen} options={{ tabBarLabel: 'Instructions' }} />
    <Tab.Screen name="ProfileSettings" component={ProfileSettingsScreen} options={{ tabBarLabel: 'Profile Settings' }} />
   
  </Tab.Navigator>
);
 function index() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="MainTabs" component={MainTabNavigator} /> 
    </Stack.Navigator>
  </NavigationContainer>
  );
}