import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Button from '../../../components/Button';
import ModalDeposit from './ModalDeposit';
import Row from '../../../components/Row';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

const HeaderStyle = styled.View`
  padding-top: 20px;
  padding-horizontal: 16px;
  margin-bottom: 40px;
`;

const SecondHeader = styled.View`
  padding-horizontal: 16px;
  margin-bottom: 40px;
`;

const HeaderText = styled.Text`
  font-size: 18px;
  color: gray;
`;

const ProfitText = styled.Text`
  font-size: 18px;
  color: #4ba651;
`;

const PowerText = styled.Text`
  font-size: 25px;
  color: white;
`;

const AmountText = styled.Text`
  font-size: 44px;
  color: white;
  margin-top: 8px;
`;

const PowerContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Header: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [buyingPower, setBuyingPower] = useState(840.56);
  const [isAmountVisible, setIsAmountVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleCloseModal = () => {
    console.log('toggleModal');

    setModalVisible(false);
  };

  const handleDeposit = (amount: string) => {
    if (isNaN(Number(amount))) return;
    setBuyingPower(buyingPower + Number(amount));
    toggleModal();
  };
  const handleIconPress = () => {
    setIsAmountVisible(!isAmountVisible);
  };
  return (
    <View>
      <HeaderStyle>
        <HeaderText>Total Investing</HeaderText>
        <Row style={{alignItems: 'center'}}>
          {isAmountVisible ? (
            <AmountText>$100,000</AmountText>
          ) : (
            <AmountText>••••••••</AmountText>
          )}
          <TouchableOpacity onPress={handleIconPress}>
            <Icon
              name="eye-off"
              size={15}
              color="#858688"
              style={styles.icon}
            />
          </TouchableOpacity>
        </Row>
        <Row style={{alignItems: 'center'}}>
          <Icon
            name="trending-up"
            size={15}
            color="#4ba651"
            style={styles.iconTrending}
          />
          <ProfitText>+$32.5 (0.48%)</ProfitText>
          <MaterialCommunityIcons
            name="progress-question"
            size={15}
            color="#858688"
            style={styles.iconQuestion}
          />
        </Row>
      </HeaderStyle>
      <SecondHeader>
        <Row style={{alignItems: 'center'}}>
          <HeaderText>Buying Power</HeaderText>
          <MaterialCommunityIcons
            name="progress-question"
            size={15}
            color="#858688"
            style={styles.iconQuestion}
          />
        </Row>
        {/* <PowerContent> */}
        <PowerContent>
          <PowerText>${buyingPower}</PowerText>
          <Button title="Deposit" iconName="plus" onPress={toggleModal} />
        </PowerContent>

        {/* </PowerContent> */}
      </SecondHeader>
      <ModalDeposit
        isVisible={isModalVisible}
        handleDeposit={handleDeposit}
        onBackdropPress={handleCloseModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginLeft: 10,
    marginTop: 8,
  },
  iconQuestion: {
    marginLeft: 10,
  },
  iconTrending: {
    marginRight: 5,
  },
});

export default Header;
