import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RDItems() {
    return (
        <View style={styles.container}>
            <Text>Holdings(7)</Text>
            <View style={styles.itemsContainer}>
                <View style={styles.itemContainer}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.rdName}>HDFC RD</Text>
                        <Text style={styles.rdType}>Rate 7.25%</Text>
                    </View>
                    <View style={styles.middleContainer}>
                        <Text style={styles.dateValue}>on 19-Mar-2026</Text>
                        <Text style={styles.dateText}>@ ₹10000 pm</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.currentValue}>₹11,534</Text>
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
    rightContainer: {
        alignItems: 'flex-end'
    },
    rdName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    rdType: {
        fontSize: 12,
        color: 'gray'
    },
    currentValue: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    actualValue: {
        fontSize: 12,
        color: 'gray'
    },
    dateText: {
        fontSize: 12,
        color: 'gray'
    },
    dateValue: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});