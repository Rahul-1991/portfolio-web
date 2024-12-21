import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import StocksScreen from './src/screens/StocksScreen';
import MutualFundsScreen from './src/screens/MutualFundsScreen';
import FixedDepositScreen from './src/screens/FixedDepositScreen';
import RDScreen from './src/screens/RDScreen';
import { Image, StyleSheet } from 'react-native';


const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Stocks: StocksScreen,
  MutualFunds: MutualFundsScreen,
  FixedDeposit: FixedDepositScreen,
  RecurringDeposit: RDScreen
},{
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTitle: () => (
        <Image 
          style={styles.headerLogo}
          source={require('./assets/logo.png')}
          resizeMode="contain"
        />
      ),
      headerTitleAlign: 'left',
      headerStyle: {
        backgroundColor: 'blue'
      }
    }
  }
);

const styles = StyleSheet.create({
  headerLogo: {
    width: 30,
    height: 30
  }
});

export default createAppContainer(AppNavigator);
