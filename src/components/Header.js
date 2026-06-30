import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>☑ Task Master</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#dad7d7',
    backgroundColor: '#504f4f',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#dad7d7',
  },
});