import React, {useState} from 'react';
import {View, Button} from 'react-native';
import TitleLink from '../../../components/TitleLink';
import UserCards from '../../../components/UserCards';
import styled from 'styled-components/native';

const ContainerRow = styled.View`
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row'
`;

interface TopMovers {
  name: string;
  value: number;
}
const TopMovers: React.FC = () => {
  const [selected, setSelected] = useState('Trending');

  const movers: TopMovers[] = [
    {name: 'Stock A', value: 100},
    {name: 'Stock B', value: 200},
    {name: 'Stock C', value: 150},
    {name: 'Stock D', value: 180},
    {name: 'Stock E', value: 120},
    {name: 'Stock A', value: 100},
    {name: 'Stock B', value: 200},
    {name: 'Stock C', value: 150},
    {name: 'Stock D', value: 180},
    {name: 'Stock E', value: 120},
  ];
  return (
    <View style={{marginTop: 20}}>
      <View>
        <TitleLink title="Top Movers" text="All" iconName="arrow-right" />
      </View>
      <ContainerRow>
        <Button
          title="Trending"
          onPress={() => setSelected('Trending')}
          color={selected === 'Trending' ? 'white' : '#898a8c'}
        />
        <Button
          title="Top Gainers"
          onPress={() => setSelected('Top Gainers')}
          color={selected === 'Top Gainers' ? 'white' : '#898a8c'}
        />
        <Button
          title="Top Losers"
          onPress={() => setSelected('Top Losers')}
          color={selected === 'Top Losers' ? 'white' : '#898a8c'}
        />
      </ContainerRow>
      {movers.map((mover, index) => (
        <UserCards name={mover.name} value={mover.value} key={index} />
      ))}
    </View>
  );
};

export default TopMovers;
