import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FixedDepositSummary from '../components/FixedDepositSummary';
import FixedDepositItems from '../components/FixedDepositItems';

export default function FixedDepositScreen() {
    return (
        <View style={styles.container}>
            <FixedDepositSummary />
            <FixedDepositItems />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFDD0',
    }
});