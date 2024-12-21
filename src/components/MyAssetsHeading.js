import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MyAssetsHeading() {
  return (
    <View>
      <Text style={styles.heading}>MY ASSETS</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingTop: 10,
    // backgroundColor: 'blue',
    color: 'white'
  }
});