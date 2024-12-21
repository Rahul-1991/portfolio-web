import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NSCSummary from '../components/NSCSummary';
import NSCItems from '../components/NSCItems';

export default function NSCScreen() {
    return (
        <View style={styles.container}>
            <NSCSummary />
            <NSCItems />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFDD0',
    }
});