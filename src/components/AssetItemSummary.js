import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AssetItemSummary({ portfolioData, title }) {

    const formatAmountWithCommas = (amount) => {
        if (!amount) return '0';
        if (amount) {
            amount = Math.floor(amount);
        }
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{title}</Text>
            <View style={styles.valueContainer}>
                <View style={styles.investedValueContainer}>
                    <Text style={styles.inrValue}>₹{formatAmountWithCommas(portfolioData.invested)}</Text>
                    <Text style={styles.valueLabel}>Invested Value</Text>
                </View>
                <View style={styles.currentValueContainer}>
                    <Text style={styles.inrValue}>₹{formatAmountWithCommas(portfolioData.current)}</Text>
                    <Text style={styles.valueLabel}>Current Value</Text>
                </View>
            </View>
            <View style={styles.profitContainer}>
                <View style={styles.profitInrContainer}>
                    <Text style={styles.profitValue}>₹{formatAmountWithCommas(portfolioData.gain)}</Text>
                    <Text style={styles.valueLabel}>Profit INR</Text>
                </View>
                <View style={styles.profitPercentageContainer}>
                    <Text style={styles.profitValue}>
                        {((portfolioData.gain) / portfolioData.invested * 100).toFixed(1)}%
                    </Text>
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
    currentValueContainer: {
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
    },
    profitValue: {  
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    }
});