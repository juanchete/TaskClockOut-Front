import React from 'react';
import {View} from 'react-native';
import Row from './Row';
import {Stock} from '../features/home/interfaces';
import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

const RowContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 16px;
  padding-vertical: 8px;
  flexdirection: row;
`;

const LeftBlock = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CircleImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 8px;
`;

const PrimaryText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const SecondaryText = styled.Text`
  color: gray;
  font-size: 14px;
`;

const RightBlock = styled.View`
  align-items: flex-end;
`;

const SecondaryTextGreen = styled.Text`
  color: #4ba651;
  font-size: 14px;
`;

const SecondaryTextRed = styled.Text`
  color: #b84743;
  font-size: 14px;
`;

const StockCardsComponent = ({
  shortName,
  name,
  close,
  difference,
  percentage,
  imageURL,
}: Stock) => {
  const isGrowing = difference > 0;

  return (
    <RowContainer>
      <LeftBlock>
        <CircleImage source={{uri: imageURL}} />
        <View>
          <PrimaryText>{shortName}</PrimaryText>
          <SecondaryText>{name}</SecondaryText>
        </View>
      </LeftBlock>
      <RightBlock>
        <PrimaryText>${close}</PrimaryText>
        <Row>
          <Icon
            name={isGrowing ? 'trending-up' : 'trending-down'}
            size={15}
            color={isGrowing ? '#4ba651' : '#b84743'}
          />
          {isGrowing ? (
            <SecondaryTextGreen>
              ${difference.toFixed(2)} (${percentage.toFixed(2)}%)
            </SecondaryTextGreen>
          ) : (
            <SecondaryTextRed>
              {difference.toFixed(2)}% (${percentage.toFixed(2)}%)
            </SecondaryTextRed>
          )}
        </Row>
      </RightBlock>
    </RowContainer>
  );
};

export default StockCardsComponent;
