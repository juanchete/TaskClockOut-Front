import React from 'react';
import {ScrollView, Text} from 'react-native';
import StockCardsComponent from '../../../components/StocksCards';
import TitleLink from '../../../components/TitleLink';
import {Stock} from '../interfaces';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #1c1e1f;
  height: 300;
`;
const Title = styled.Text`
  font-size: 25px;
  color: white;
  text-align: center;
  margin-top: 20px;
`;

const Watchlist = ({stocks, error}: {stocks: [Stock]; error: boolean}) => {
  console.log('stocks', error);

  return (
    <Container>
      <ScrollView>
        <TitleLink title="Watchlist" text="All" iconName="arrow-right-thin" />
        {error ? (
          <Title>Error! Try again in a minute</Title>
        ) : (
          stocks.map((stock, index) => (
            <StockCardsComponent
              name={stock.name}
              shortName={stock.shortName}
              close={stock.close}
              key={index}
              difference={stock.difference}
              percentage={stock.percentage}
              imageURL={stock.imageURL}
            />
          ))
        )}
      </ScrollView>
    </Container>
  );
};

export default Watchlist;
