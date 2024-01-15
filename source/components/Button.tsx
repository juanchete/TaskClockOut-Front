import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacityProps} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Row from './Row';

const StyledButton = styled.TouchableOpacity`
  height: 40px;
  width: 150px;
  background-color: #232526;
  justify-content: space-around;
  align-items: center;
  border-radius: 50px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  iconName?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  iconName,
  ...props
}) => (
  <StyledButton {...props} onPress={onPress}>
    <Row>
      {iconName && (
        <Icon
          name={iconName}
          size={20}
          color="#858688"
          style={{marginRight: 10}}
        />
      )}
      <ButtonText>{title}</ButtonText>
    </Row>
  </StyledButton>
);

export default Button;
