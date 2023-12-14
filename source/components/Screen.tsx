import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

interface ScreenProps {
    children: JSX.Element | JSX.Element[] | null | undefined;
    }
const Screen = ({children} : ScreenProps) => {
  return (
    <ScrollView style={styles.container}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121415',
    paddingTop: 50,
  },
});

export default Screen;
