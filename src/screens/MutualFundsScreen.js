import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MutualFundSummary from '../components/MutualFundsSummary';
import MutualFundItems from '../components/MutualFundItems';
import AssetItemSummary from '../components/AssetItemSummary';
export default function MutualFundsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <AssetItemSummary portfolioData={navigation.getParam('mfData')} title="Mutual Funds" />
            <MutualFundItems portfolioItems={navigation.getParam('mfData')['investments']} />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFDD0',
    }
});