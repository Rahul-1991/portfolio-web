import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AssetTotal({ total }) {

  const formatAmount = (amount) => {
    if (!amount) return '0';
    
    if (amount >= 100000) {
      return Math.floor(amount/100000) + 'L';
    }
    if (amount >= 1000) {
      return Math.floor(amount/1000) + 'K';
    }
    return amount.toString();
  };
  return (
    <View>
      <Text style={styles.assetTotal}>₹{formatAmount(total)}</Text>
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