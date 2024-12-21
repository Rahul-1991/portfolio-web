import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyAssetsHeading from '../components/MyAssetsHeading';
import AssetTotal from '../components/AssetTotal';
import AssetSummary from '../components/AssetSummary';
import AssetProfitPercent from '../components/AssetProfitPercent';



export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <MyAssetsHeading />
        <AssetTotal />
        <AssetProfitPercent profit={12.8} />
      </View>
      <AssetSummary navigation={navigation} />
    </View>
  );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFDD0',
    },
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        // alignItems: 'center',
        backgroundColor: 'blue',
        paddingBottom: 10
    }
});
