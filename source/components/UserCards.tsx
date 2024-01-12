import React from 'react';
import styled from 'styled-components/native';
import Row from './Row';

interface Stock {
  name: string;
  value: number;
}

const Container = styled(Row)`
  justify-content: space-around;
  align-items: center;
  padding: 16px 8px;
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

const RightBlock = styled.View`
  align-items: flex-end;
`;

const UserCards = ({name, value}: Stock) => {
  return (
    <Container>
      <LeftBlock>
        <CircleImage
          source={{
            uri: 'https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs',
          }}
        />
        <PrimaryText>{name}</PrimaryText>
      </LeftBlock>
      <RightBlock>
        <PrimaryText>${value}</PrimaryText>
      </RightBlock>
    </Container>
  );
};

export default UserCards;
