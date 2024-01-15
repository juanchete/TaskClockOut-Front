import React, {useCallback} from 'react';
import Header from '../features/home/components/Header';
import Screen from '../components/Screen';
import Watchlist from '../features/home/components/Watchlist';
import styled from 'styled-components/native';
import TopMovers from '../features/home/components/TopMovers';
import {useWatchlistData} from '../features/home/services/getWatchlist';
import Skeleton from '../components/Skeleton';
import {Text} from 'react-native';

const ContainerSkeleton = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Home: React.FC = () => {
  const {data, isLoading, isError, refetch} = useWatchlistData(
    false,
    '2023-12-06',
  );

  const handleEndReached = useCallback(() => {
    // Generar una nueva fecha aleatoria aquí
    // const newRandomDate = generateRandomDate();
    const dates = ['2023-12-08', '2023-12-09', '2023-12-10'];
    const randomDate = dates[Math.floor(Math.random() * dates.length)];

    refetch({date: randomDate});
  }, [refetch]);
  console.log('isError', isError);

  return (
    <Screen refresh={isLoading} refetch={handleEndReached}>
      <Header />
      {isLoading ? (
        <ContainerSkeleton>
          <Skeleton width={300} height={300} />
        </ContainerSkeleton>
      ) : (
        <Watchlist stocks={data?.data || []} error={isError} />
      )}
      <TopMovers />
      {/* <TitleLink title="Top Movers" text="All" iconName="arrow-right-thin" /> */}
    </Screen>
  );
};

export default Home;
