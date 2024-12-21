import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FixedDepositSummary() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Fixed Deposit</Text>
            <View style={styles.valueContainer}>
                <View style={styles.investedValueContainer}>
                    <Text style={styles.inrValue}>₹10,000</Text>
                    <Text style={styles.valueLabel}>Invested</Text>
                </View>
                <View style={styles.returnValueContainer}>
                    <Text style={styles.inrValue}>₹10,000</Text>
                    <Text style={styles.valueLabel}>Return</Text>
                </View>
            </View>
            <View style={styles.profitContainer}>
                <View style={styles.profitInrContainer}>
                    <Text style={styles.profitValue}>₹10,000</Text>
                    <Text style={styles.valueLabel}>Profit INR</Text>
                </View>
                <View style={styles.profitPercentageContainer}>
                    <Text style={styles.profitValue}>12.9%</Text>
                    <Text style={styles.valueLabel}>Profit %</Text>
                </View>
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgreen',
        margin: 10,
        padding: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'black'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    valueContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    profitContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    investedValueContainer: {
        alignItems: 'flex-start'
    },
    returnValueContainer: {
        alignItems: 'flex-end'
    },
    profitInrContainer: {
        alignItems: 'flex-start'
    },
    profitPercentageContainer: {
        alignItems: 'flex-end'
    },
    inrValue: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    }
});

