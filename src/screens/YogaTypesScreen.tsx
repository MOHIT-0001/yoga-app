import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const YogaTypesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Yoga Types</Text>
    </View>
  );
};

export default YogaTypesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    color: '#83f53d',
    fontWeight: 'bold',
  },
});
