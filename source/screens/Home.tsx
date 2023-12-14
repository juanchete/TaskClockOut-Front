import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../features/home/Header';
import Screen from '../components/Screen';

const Home: React.FC = () => {
  return (
    <Screen>
        <Header />
    </Screen>
    // <View style={styles.container}>
    //   <View style={styles.header}>
    //     <Text style={styles.headerText}>Total Investing</Text>
    //     <Text style={styles.amountText}>$100,000</Text>
    //     <Text style={styles.profitText}>+$32.5 (0.48%)</Text>
    //   </View>
    //   <View style={styles.watchList}>
    //     {/* Display the company names and market values here */}
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 50,
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 18,
    color: 'gray',
  },
  profitText: {
    fontSize: 18,
    color: '#0a782f',
  },
  amountText: {
    fontSize: 44,
    color: 'white',
    marginTop: 8,
  },
  watchList: {
    flex: 1,
    backgroundColor: 'gray',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});

export default Home;
