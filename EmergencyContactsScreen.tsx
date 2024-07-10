// EmergencyContactsScreen.tsx

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const EmergencyContactsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Emergency Contacts Screen</Text>
      {/* Add your emergency contacts UI here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default EmergencyContactsScreen;
