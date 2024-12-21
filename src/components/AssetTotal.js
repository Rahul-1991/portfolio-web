import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AssetTotal() {
  return (
    <View>
      <Text style={styles.assetTotal}>₹40,000</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  assetTotal: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingTop: 10,
    // backgroundColor: 'blue',
    color: 'white',
    paddingBottom: 10
  }
});