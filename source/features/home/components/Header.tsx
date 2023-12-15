import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import Button from '../../../components/Button';
import ModalDeposit from './ModalDeposit';
import Row from '../../../components/Row';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


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
        <Row style={{alignItems: "center"}}>
          <Text style={styles.amountText}>$100,000</Text>
          <Icon name="eye-off" size={15} color="#858688" style={styles.icon} />
        </Row>
        <Row style={{alignItems: "center"}}>
          <Icon name='trending-up' size={15} color="#4ba651" style={styles.iconTrending} />
          <Text style={styles.profitText}>+$32.5 (0.48%)</Text>
          <MaterialCommunityIcons name="progress-question" size={15} color="#858688" style={styles.iconQuestion} />
        </Row>
      </View>
      <View style={styles.secondHeader}>
        <Row style={{alignItems: "center"}}>
          <Text style={styles.headerText}>Total Investing</Text>
          <MaterialCommunityIcons name="progress-question" size={15} color="#858688" style={styles.iconQuestion} />
        </Row>
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
    color: '#4ba651',
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
  icon: {
    marginLeft:10 ,
    marginTop: 8,
  },
  iconQuestion: {
    marginLeft:10 ,
  },
  iconTrending: {
    marginRight: 5,
  },
});

export default Header;
