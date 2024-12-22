import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyAssetsHeading from '../components/MyAssetsHeading';
import AssetTotal from '../components/AssetTotal';
import AssetSummary from '../components/AssetSummary';
import AssetProfitPercent from '../components/AssetProfitPercent';
import api from '../api/portfolio_manager';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function HomeScreen({ navigation }) {

  const [assets, setAssets] = useState([]);
  
  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        // Check if data exists in local storage
        const storedData = await AsyncStorage.getItem('portfolioData');
        
        if (storedData) {
          // If data exists in storage, use it
          console.log("Loading portfolio data from storage");
          setAssets(JSON.parse(storedData));
        } else {
          // If no stored data, fetch from API
          console.log("Fetching portfolio data from API...");
          const response = await api.get('/portfolio_data');
          
          // Save to local storage
          await AsyncStorage.setItem('portfolioData', JSON.stringify(response.data));
          
          setAssets(response.data);
        }
      } catch (error) {
        console.error('Error loading portfolio data:', error);
      }
    };

    loadPortfolioData();
  }, []);

  if (!assets || assets.length === 0) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <MyAssetsHeading />
        <AssetTotal total={assets.totalInvestment} />
        <AssetProfitPercent profit={12.8} />
      </View>
      <AssetSummary 
        assets={assets.transactions}
        navigation={navigation} 
      />
    </View>
  );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFDD0',
    },
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        // alignItems: 'center',
        backgroundColor: 'blue',
        paddingBottom: 10
    }
});
