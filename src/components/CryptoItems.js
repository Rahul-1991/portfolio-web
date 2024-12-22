import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

export default function CryptoItems({ portfolioItems }) {
    const images = {
        Bitcoin: require('../../assets/Bitcoin.png'),
        Ethereum: require('../../assets/Ethereum.png'),
    };
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
                            <View style={styles.topContainer}>
                                <View style={styles.topLeftContainer}>
                                    <View style={styles.logoContainer}>
                                        <Image source={images[item.name]} style={styles.logo} />
                                        {/* <Image source={require('../../assets/bitcoin.png')} style={styles.logo} /> */}
                                    </View>
                                    <View style={styles.nameContainer}>
                                        <Text style={styles.count}>{item.qty}</Text>
                                        <Text style={styles.name}>{item.name}</Text>
                                    </View>
                                </View>
                                <View style={styles.topRightContainer}>
                                    <Text style={styles.profitPercent}>{formatAmountWithCommas(item.returnPercent)}%</Text>
                                    <Text style={styles.profitPercentText}>Profit%</Text>
                                </View>
                            </View>
                            <View style={styles.bottomContainer}>
                                <View style={styles.leftContainer}>
                                    <Text style={styles.currentText}>Current</Text>
                                    <Text style={styles.currentValue}>₹{formatAmountWithCommas(item.currentAmount)}</Text>
                                </View>
                                <View style={styles.middleContainer}>
                                    <Text style={styles.investedText}>Invested</Text>
                                    <Text style={styles.investedValue}>₹{formatAmountWithCommas(item.invested)}</Text>
                                </View>
                                <View style={styles.rightContainer}>
                                    <Text style={styles.profitText}>Profit</Text>
                                    <Text style={styles.profitValue}>₹{formatAmountWithCommas(item.unrealisedGain)}</Text>
                                </View>
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
    },
    itemsContainer: {
        marginTop: 20
    },
    itemContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 20,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        paddingBottom: 10
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topLeftContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightContainer: {
        alignItems: 'flex-end'
    },
    currentValue: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    investedValue: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    profitValue: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    logoContainer: {
        marginRight: 10
    },
    logo: {
        width: 30,
        height: 30
    },
    count: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    name: {
        fontSize: 12,
        color: 'gray'
    },
    profitPercentText: {
        fontSize: 12,
        color: 'gray'
    }
});
