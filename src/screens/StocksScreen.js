import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StockSummary from '../components/StockSummary';
import StockItems from '../components/StockItems';

export default function StocksScreen() {
    return (
        <View style={styles.container}>
            <StockSummary />
            <StockItems />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFDD0',
    }
});