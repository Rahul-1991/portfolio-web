import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FixedDepositSummary from '../components/FixedDepositSummary';
import FixedDepositItems from '../components/FixedDepositItems';
import AssetItemSummary from '../components/AssetItemSummary';

export default function FixedDepositScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <AssetItemSummary portfolioData={navigation.getParam('assets')} title="Fixed Deposit" />
            <FixedDepositItems portfolioItems={navigation.getParam('assets')['investments']} />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFDD0',
        flex: 1
    }
});