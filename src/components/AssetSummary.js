import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Asset from './Asset';

export default function AssetSummary({ navigation }) {

  return (
    <View style={styles.container}>
        <View style={styles.headingContainer}>
            <Text>Assets</Text>
        </View>
        <View style={{
            borderBottomWidth: 1,
            borderBottomColor: '#000',
            margin: 10,
            margin: 10
        }} />
        <View style={styles.assetsContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Stocks')}>
                <Asset 
                    icon="📈"
                    title="Stocks" 
                    value="₹15,000"
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MutualFunds')}>
                <Asset 
                    icon="📊"
                    title="Mutual Funds" 
                    value="₹1,50,000"
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('FixedDeposit')}>
                <Asset 
                    icon="🏦"
                    title="Fixed Deposit" 
                    value="₹1,50,000"
                />
            </TouchableOpacity>
        </View>
        <View style={styles.assetsContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('RD')}>
                <Asset 
                    icon="💰"
                    title="RD" 
                    value="₹1,50,000"
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Crypto')}>
                <Asset 
                    icon="₿"
                    title="Crypto" 
                    value="₹1,50,000"
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('NSC')}>
                <Asset 
                    icon="📜"
                    title="NSC" 
                    value="₹1,50,000"
                />
            </TouchableOpacity>
        </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  headingContainer: {
    padding: 5,
    margin: 10,
    borderWidth: 1,
    borderColor: 'lightblue',
    borderRadius: 10,
    backgroundColor: 'lightblue',
    // flexDirection: 'row',
    alignSelf: 'flex-start'
  },
  container: {
    backgroundColor: 'white',
    padding: 10,
    // justifyContent: 'space-between',
    borderRadius: 25,
    margin: 20,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  assetsContainer: {
    flexWrap: 'wrap',
    // padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10
  },
  iconContainer: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10
  },
  icon: {
    fontSize: 20
  },
  label: {
    fontSize: 15
  },
  value: {
    fontSize: 20
  }
});
