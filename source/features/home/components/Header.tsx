import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
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
flexDirection: 'row', justifyContent: "space-between"
`;

const Header: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [buyingPower, setBuyingPower] = useState(840.56);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleDeposit = (amount: string) => {
    if (isNaN(Number(amount))) return;
    setBuyingPower(buyingPower + Number(amount));
    toggleModal();
  };
  return (
    <View>
      <HeaderStyle>
        <HeaderText>Total Investing</HeaderText>
        <Row style={{alignItems: 'center'}}>
          <AmountText>$100,000</AmountText>
          <Icon name="eye-off" size={15} color="#858688" style={styles.icon} />
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
          <HeaderText>Total Investing</HeaderText>
          <MaterialCommunityIcons
            name="progress-question"
            size={15}
            color="#858688"
            style={styles.iconQuestion}
          />
        </Row>
        <PowerContent>
          <PowerText>${buyingPower}</PowerText>
          <Button icon="plus" text="Deposit" onPress={toggleModal} />
        </PowerContent>
      </SecondHeader>
      <ModalDeposit isVisible={isModalVisible} handleDeposit={handleDeposit} />
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
