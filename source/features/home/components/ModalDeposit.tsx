import React, {useState} from 'react';
import Modal from 'react-native-modal';
import Button from '../../../components/Button';
import styled from 'styled-components/native';

const ModalStyle = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.Text`
  margin-bottom: 10px;
`;

const Input = styled.TextInput`
  height: 40px;
  width: 200px;
  border-color: gray;
  border-width: 1px;
  margin-bottom: 10px;
  padding-horizontal: 10px;
`;

interface ModalDepositProps {
  handleDeposit: (amount: string) => void;
  isVisible: boolean;
}

const ModalDeposit: React.FC<ModalDepositProps> = ({
  handleDeposit,
  isVisible,
}) => {
  const [amount, setAmount] = useState('');

  const handleAmountChange = (value: string) => {
    setAmount(value);
  };

  return (
    <Modal isVisible={isVisible}>
      <ModalStyle>
        <ModalContent>
          <Title>Add funds to your wallet</Title>
          <Description>Enter the amount you want to deposit:</Description>
          <Input
            keyboardType="numeric"
            value={amount}
            onChangeText={handleAmountChange}
          />
          <Button
            icon="plus"
            text="Deposit"
            onPress={() => handleDeposit(amount)}
          />
        </ModalContent>
      </ModalStyle>
    </Modal>
  );
};

export default ModalDeposit;
