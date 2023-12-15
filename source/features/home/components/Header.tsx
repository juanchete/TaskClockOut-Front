import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import Button from '../../../components/Button';
import ModalDeposit from './ModalDeposit';

const Header: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [buyingPower, setBuyingPower] = useState(840.56);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleDeposit = (amount: string) => {
    // Perform deposit logic here
    console.log(Number(amount));
    if (isNaN(Number(amount))) return;
    setBuyingPower(buyingPower + Number(amount))
    toggleModal();
};
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Total Investing</Text>
        <Text style={styles.amountText}>$100,000</Text>
        <Text style={styles.profitText}>+$32.5 (0.48%)</Text>
      </View>
      <View style={styles.secondHeader}>
        <Text style={styles.headerText}>Total Investing</Text>
        <View style={{ flexDirection: 'row', justifyContent: "space-between" }} >
            <Text style={styles.powerText}>${buyingPower}</Text>
            <Button icon='plus' text="Deposit" onPress={toggleModal}/>
        </View>
      </View>
     <ModalDeposit isVisible={isModalVisible} handleDeposit={handleDeposit} />
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
