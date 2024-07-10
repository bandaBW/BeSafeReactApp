// screens/RegistrationScreen.tsx

import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation


/////////////////////--------RegistrationScreen() constructor function that handles API calls, navigation calls, etc -----------////////////////////////////////////

export default function RegistrationScreen() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation(); // Use useNavigation to get the navigation prop


  const handleRegister = () => {
    // Placeholder logic for handling registration
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Perform registration logic (e.g., API call)
    // Navigate to login screen or other relevant screen after successful registration
    alert("Registration successful!");
    navigation.goBack(); // Navigate back to the login screen after registration
  };
  const navigateToLogin = () => {
    // Navigate to the registration screen
    // Replace 'RegisterScreen' with the actual name of your registration screen component
    navigation.goBack();
  };

    /////////////////////--------RegistrationScreen().return() function that describes the actual screen VIEW -----------////////////////////////////////////

  return (
    <View style={styles.container}>
        <Text style={styles.beSafeText}>BeSAFE!</Text>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Enter your name"
      />
      <Text style={styles.label}>Surname:</Text>
      <TextInput
        style={styles.input}
        value={surname}
        onChangeText={(text) => setSurname(text)}
        placeholder="Enter your surname"
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <Text style={styles.label}>Mobile No:</Text>
      <TextInput
        style={styles.input}
        value={mobileNo}
        onChangeText={(text) => setMobileNo(text)}
        placeholder="Enter your mobile number"
        keyboardType="phone-pad"
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Text style={styles.label}>Confirm Password:</Text>
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        placeholder="Confirm your password"
        secureTextEntry
      />
      <Button
        title="Submit"
        onPress={handleRegister}
        //style={styles.button}
      />
       <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
        <Text style={styles.loginLink}>Login</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View> 
  );
}

/////////////////////--------STYLING FOR RegisterScreen (stylesheet - )--prop styles.obj----------////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
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
  loginLink: {
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
