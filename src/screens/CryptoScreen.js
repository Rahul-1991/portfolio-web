import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CryptoSummary from '../components/CryptoSummary';
import CryptoItems from '../components/CryptoItems';

export default function CryptoScreen() {
    return (
        <View style={styles.container}>
            <CryptoSummary />
            <CryptoItems />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFDD0',
    }
});