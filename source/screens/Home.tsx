import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../features/home/components/Header';
import Screen from '../components/Screen';
import Watchlist from '../features/home/components/Watchlist';
import TitleLink from '../components/TitleLink';
import TopMovers from '../features/home/components/TopMovers';
import { useWatchlistData } from '../features/home/services/getWatchlist';
import Skeleton from '../components/Skeleton';

const Home: React.FC = () => {

  const { data, isLoading, isError, refetch } = useWatchlistData(false, '2023-12-06');

  const handleEndReached = useCallback(() => {
    // Generar una nueva fecha aleatoria aquí
    // const newRandomDate = generateRandomDate();
    const dates = [ "2023-12-08", "2023-12-09", "2023-12-10"];
    const randomDate = dates[Math.floor(Math.random() * dates.length)];

    refetch({ date: randomDate });
  }, [refetch]);

  

  return (
    <Screen refresh={isLoading} refetch={handleEndReached}>
        <Header />
        {isLoading ? <View style={styles.containerSkeleton}>
          <Skeleton width={300} height={300}/>
        </View> : <Watchlist stocks={ data?.data || []}/>}
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
  containerSkeleton: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Home;
