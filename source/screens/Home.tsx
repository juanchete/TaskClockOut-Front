import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../features/home/Header';
import Screen from '../components/Screen';
import Watchlist from '../features/home/Watchlist';
import TitleLink from '../components/TitleLink';
import TopMovers from '../features/home/TopMovers';

const Home: React.FC = () => {
  return (
    <Screen>
        <Header />
        <Watchlist />
        <TopMovers />
        {/* <TitleLink title="Top Movers" text="All" iconName="arrow-right-thin" /> */}
    </Screen>
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
