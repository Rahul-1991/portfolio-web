import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FixedDepositItems() {
    return (
        <View style={styles.container}>
            <Text>Holdings(7)</Text>
            <View style={styles.itemsContainer}>
                <View style={styles.itemContainer}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.fdName}>HDFC FD</Text>
                        <Text style={styles.fdType}>Rate 7.25%</Text>
                    </View>
                    <View style={styles.middleContainer}>
                        <Text style={styles.dateValue}>19 Mar 2026</Text>
                        <Text style={styles.dateText}>Maturity Date</Text>
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
    fdName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    fdType: {
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