import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../../components/Button';

const Header: React.FC = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Total Investing</Text>
        <Text style={styles.amountText}>$100,000</Text>
        <Text style={styles.profitText}>+$32.5 (0.48%)</Text>
      </View>
      <View style={styles.secondHeader}>
        <Text style={styles.headerText}>Total Investing</Text>
        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
            <Text style={styles.powerText}>$100,000</Text>
            <Button icon='plus' text="Deposit" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    paddingHorizontal: 16,
    marginBottom: 40
  },
  secondHeader: {
    paddingHorizontal: 16,
    marginBottom: 40
  },
  headerText: {
    fontSize: 18,
    color: 'gray',
  },
  profitText: {
    fontSize: 18,
    color: '#0a782f',
  },
  powerText: {
    fontSize: 25,
    color: 'white',
  },
  amountText: {
    fontSize: 44,
    color: 'white',
    marginTop: 8,
  },
  watchList: {
    flex: 1,
    backgroundColor: 'gray',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});

export default Header;
