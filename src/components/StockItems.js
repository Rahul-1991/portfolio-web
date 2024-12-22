import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function StockItems({ portfolioItems }) {
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
                                <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.stockCount}>{item.qty} Shares</Text>
                        </View>
                        <View style={styles.rightContainer}>
                            <Text style={styles.currentValue}>₹{formatAmountWithCommas(item.currentAmount)}</Text>
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
        marginTop: 10,
        flex: 1
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
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