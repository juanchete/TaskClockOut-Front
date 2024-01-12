import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const Title = styled.Text`
  font-size: 25px;
  color: white;
`;

const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TextTitle = styled.Text`
  margin-right: 5px;
  color: #898a8c;
`;

interface TitleLinkProps {
    title: string;
    text: string;
    iconName: string;
}

const TitleLink: React.FC<TitleLinkProps> = ({ title, text, iconName }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Content>
                <TextTitle>{text}</TextTitle>
                <Icon name={iconName} color={'#898a8c'} size={20}/>
            </Content>
        </Container>
    );
};

export default TitleLink;
