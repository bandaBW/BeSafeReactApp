// screens/LoginScreen.tsx

import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation


/////////////////////--------LoginScreen() constructor function that handles API calls, navigation calls, etc -----------////////////////////////////////////

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation(); // Use useNavigation to get the navigation prop

  const handleLogin = () => {
    // Placeholder logic for handling login
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      navigation.navigate('MainTabs');

      // Navigate to the next screen or perform additional actions
    } else {
      alert("Invalid username or password");
    }
  };



  /////////////////////--------LoginScreen.return() function that describes the actual screen VIEW -----------////////////////////////////////////
  return (
    <View style={styles.container}>
              <Text style={styles.beSafeText}>BeSAFE!</Text>

      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={(text) => setUsername(text)}
        placeholder="Enter your username"
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Button
        title="Login"
        onPress={handleLogin}
        //style={styles.button}
      />
       <TouchableOpacity onPress={()=> navigation.navigate('Register') }>
      <Text style={styles.registerLink}> Don't have an Account? Create one!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <StatusBar style="auto" />
    </View>
  );
}

/////////////////////--------STYLING FOR LOGIN FORM (stylesheet - )--prop styles.obj----------////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    width: "100%",
  },
  registerLink: {
    marginTop: 10,
    color: "blue",
    textDecorationLine: "underline",
  },
  beSafeText: {
    fontSize: 48, // Adjust font size as needed
    fontWeight: 'bold',
    color: 'blue', // Adjust color as needed
    marginBottom: 20, // Optional: Adjust spacing
  },
});
