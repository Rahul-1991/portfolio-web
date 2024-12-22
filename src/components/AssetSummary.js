import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Asset from './Asset';

export default function AssetSummary({ assets, navigation }) {

  console.log("AssetSummary");
  console.log(assets);
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
            <TouchableOpacity onPress={() => navigation.navigate('Stocks', {stocksData: assets[0]})}>
                <Asset 
                    icon="📈"
                    title="Stocks" 
                    value={assets[0].invested}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MutualFunds', {mfData: assets[1]})}>
                <Asset 
                    icon="📊"
                    title="Mutual Funds" 
                    value={assets[1].invested}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('FixedDeposit', {assets: assets[2]})}>
                <Asset 
                    icon="🏦"
                    title="Fixed Deposit" 
                    value={assets[2].invested}
                />
            </TouchableOpacity>
        </View>
        <View style={styles.assetsContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('RecurringDeposit', {assets: assets[3]})}>
                <Asset 
                    icon="💰"
                    title="RD" 
                    value={assets[3].invested}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Crypto', {assets: assets[4]})}>
                <Asset 
                    icon="₿"
                    title="Crypto" 
                    value={assets[4].invested}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('NSC', {assets: assets[5]})}>
                <Asset 
                    icon="📜"
                    title="NSC" 
                    value={assets[5].invested}
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
