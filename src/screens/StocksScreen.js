import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StockSummary from '../components/StockSummary';
import StockItems from '../components/StockItems';
import AssetItemSummary from '../components/AssetItemSummary';

export default function StocksScreen({ navigation}) {
    console.log("StocksScreen");
    console.log(navigation.getParam('stocksData'));
    return (
        <View style={styles.container}>
            <AssetItemSummary portfolioData={navigation.getParam('stocksData')} title="Stocks" />
            <StockItems portfolioItems={navigation.getParam('stocksData')['investments']} />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFDD0',
        flex: 1
    }
});