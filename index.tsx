// App.tsx

import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
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

///////////////////// 1. --------index() constructor function that stacks all the Screens -----------////////////////////////////////////

export default function index() { // use styles property to style components here!
    
  ///////////////////// 2. --------index.return() function that declares the available screens to the Application -----------////////////////////////////////////
  return (
    
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Register" component={RegistrationScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Dash" component={DashboardScreen} />
      <Stack.Screen name="MainTabs" component={MainTabNavigator} /> 
    </Stack.Navigator>
  
  );
}

///////////////////// 3. --------STYLING FOR  FORM (stylesheet - )---- prop styles.obj----------////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
