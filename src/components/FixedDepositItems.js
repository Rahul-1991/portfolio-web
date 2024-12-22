import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function FixedDepositItems({ portfolioItems }) {
    const formatAmountWithCommas = (amount) => {
        if (!amount) return '0';
        if (amount) {
            amount = Math.floor(amount);
        }
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    return (
        <View style={styles.container}>
            <Text>Holdings(7)</Text>
            <View style={styles.itemsContainer}>
                <FlatList
                    data={portfolioItems}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <View style={styles.leftContainer}>
                                <Text style={styles.fdName}>{item.name}</Text>
                                <Text style={styles.fdType}>Rate {item.rate}%</Text>
                            </View>
                            <View style={styles.middleContainer}>
                                <Text style={styles.dateValue}>{item.maturityDate}</Text>
                                <Text style={styles.dateText}>Maturity Date</Text>
                            </View>
                            <View style={styles.rightContainer}>
                                <Text style={styles.currentValue}>₹{formatAmountWithCommas(item.maturityAmount)}</Text>
                                <Text style={styles.actualValue}>(₹{formatAmountWithCommas(item.invested)})</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 15,
        flex: 1
    },
    itemsContainer: {
        marginTop: 20,
        flex: 1
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