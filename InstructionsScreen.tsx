// InstructionsScreen.tsx

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const InstructionsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Instructions Screen</Text>
      {/* Add your instructions UI here */}
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

export default InstructionsScreen;
