import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AssetItemSummary from '../components/AssetItemSummary';
import CryptoItems from '../components/CryptoItems';

export default function CryptoScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <AssetItemSummary portfolioData={navigation.getParam('assets')} title="Crypto" />
            <CryptoItems portfolioItems={navigation.getParam('assets')['investments']} />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFDD0',
    }
});