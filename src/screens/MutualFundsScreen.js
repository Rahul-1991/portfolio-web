import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MutualFundSummary from '../components/MutualFundsSummary';
import MutualFundItems from '../components/MutualFundItems';

export default function MutualFundsScreen() {
    return (
        <View style={styles.container}>
            <MutualFundSummary />
            <MutualFundItems />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFDD0',
    }
});