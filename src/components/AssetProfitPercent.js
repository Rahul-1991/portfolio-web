import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AssetProfitPercent({ profit }) {
    return (
        <View style={styles.container}>
            <Text style={styles.profitText}>↑</Text>
            <Text style={styles.profitText}>{profit}%</Text>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        padding: 10,
        marginLeft: 15,
        borderRadius: 25,
        alignSelf: 'flex-start',
        flexDirection: 'row',
    },
    profitText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    }
});