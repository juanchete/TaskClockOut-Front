import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../features/home/components/Header';
import Screen from '../components/Screen';
import Watchlist from '../features/home/components/Watchlist';
import TitleLink from '../components/TitleLink';
import TopMovers from '../features/home/components/TopMovers';
import { useWatchlistData } from '../features/home/services/getWatchlist';

const Home: React.FC = () => {

  const { data, isLoading, isError, refetch } = useWatchlistData(false, '2023-12-06');

  const handleEndReached = useCallback(() => {
    // Generar una nueva fecha aleatoria aquí
    // const newRandomDate = generateRandomDate();
    refetch({ date: "2023-12-04" });
  }, [refetch]);

  // const generateRandomDate = () => {
  //   // Lógica para generar una fecha aleatoria según tus necesidades
  //   // Aquí, simplemente generamos una fecha entre 2020-01-01 y 2023-12-31
  //   const startDate = new Date('2020-01-01');
  //   const endDate = new Date('2023-12-31');
  //   const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  //   return randomDate.toISOString().split('T')[0];
  // };
  
  return (
    <Screen refresh={isLoading} refetch={handleEndReached}>
        <Header />
        <Watchlist stocks={ data?.data || []}/>
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
