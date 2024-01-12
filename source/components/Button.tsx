import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';

const StyledButton = styled.TouchableOpacity`
  height: 50px;
  width: 200px;
  background-color: blue;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...props }) => (
  <StyledButton {...props}>
    <ButtonText>{title}</ButtonText>
  </StyledButton>
);

export default Button;