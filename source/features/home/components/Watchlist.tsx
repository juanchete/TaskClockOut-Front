import React from 'react';
import {ScrollView} from 'react-native';
import StockCardsComponent from '../../../components/StocksCards';
import TitleLink from '../../../components/TitleLink';
import {Stock} from '../interfaces';
import styled from 'styled-components/native';

const Container = styled.View`
flex: 1,
backgroundColor: '#1c1e1f',
height: 300,
`;

const Watchlist = ({stocks}: {stocks: [Stock]}) => {
  return (
    <Container>
      <ScrollView>
        <TitleLink title="Watchlist" text="All" iconName="arrow-right-thin" />
        {stocks.map((stock, index) => (
          <StockCardsComponent
            name={stock.name}
            shortName={stock.shortName}
            close={stock.close}
            key={index}
            difference={stock.difference}
            percentage={stock.percentage}
            imageURL={stock.imageURL}
          />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Watchlist;
