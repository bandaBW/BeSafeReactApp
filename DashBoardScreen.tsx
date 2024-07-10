// DashboardScreen.tsx

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

/////////////////////--------DashboardScreen() constructor function that handles initialises, API calls, navigation calls, etc -----------////////////////////////////////////

const DashboardScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const goToEmergencyContacts = () => {
    navigation.navigate('EmergencyContacts');
  };

  const goToInstructions = () => {
    navigation.navigate('Instructions');
  };

  const goToProfileSettings = () => {
    navigation.navigate('ProfileSettings');
  };

  const goToPrivacyPolicy = () => {
    navigation.navigate('PrivacyPolicy');
  };

    /////////////////////--------Dashboard.return() function that describes the actual screen VIEW -----------////////////////////////////////////

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={goToEmergencyContacts}>
        <Text style={styles.buttonText}>Enroll Emergency Contacts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToInstructions}>
        <Text style={styles.buttonText}>Instructions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToProfileSettings}>
        <Text style={styles.buttonText}>Profile Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToPrivacyPolicy}>
        <Text style={styles.buttonText}>Privacy Policy</Text>
      </TouchableOpacity>
    </View>
  );
};

/////////////////////--------STYLING FOR RegisterScreen (stylesheet - )--prop styles.obj----------////////////////////////////////////


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default DashboardScreen;
