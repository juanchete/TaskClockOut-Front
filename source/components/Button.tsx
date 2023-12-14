
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

type ButtonProps = {
  text: string;
  icon?: string;
};

const Button: React.FC<ButtonProps> = ({ text, icon }) => {
  return (
    <TouchableOpacity style={styles.button}>
      {icon && <Icon name={icon} size={20} color="white" />}
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1a1c1d',
    borderRadius: 20,
    padding: 2,
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
  },
});

export default Button;
