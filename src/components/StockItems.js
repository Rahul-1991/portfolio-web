import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StockItems() {
    return (
        <View style={styles.container}>
            <Text>Holdings(7)</Text>
            <View style={styles.itemsContainer}>
                <View style={styles.itemContainer}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.itemName}>Adani Green Energy</Text>
                        <Text style={styles.stockCount}>11 Shares</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.currentValue}>₹11534</Text>
                        <Text style={styles.actualValue}>(₹15,000)</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 15,
    },
    itemsContainer: {
        marginTop: 20
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    rightContainer: {
        alignItems: 'flex-end'
    }
});