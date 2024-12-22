import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RDSummary from '../components/RDSummary';
import RDItems from '../components/RDItems';
import AssetItemSummary from '../components/AssetItemSummary';

export default function RDScreen( { navigation } ) {
    return (
        <View style={styles.container}>
            <AssetItemSummary portfolioData={navigation.getParam('assets')} title="Recurring Deposit" />
            <RDItems portfolioItems={navigation.getParam('assets')['investments']} />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFDD0',
    }
});