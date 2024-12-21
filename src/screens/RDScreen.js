import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RDSummary from '../components/RDSummary';
import RDItems from '../components/RDItems';

export default function RDScreen() {
    return (
        <View style={styles.container}>
            <RDSummary />
            <RDItems />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFDD0',
    }
});