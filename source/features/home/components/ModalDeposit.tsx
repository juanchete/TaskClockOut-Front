import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import Button from '../../../components/Button';

interface ModalDepositProps {
    handleDeposit: (amount: string) => void;
    isVisible: boolean;
}

const ModalDeposit: React.FC<ModalDepositProps> = ({ handleDeposit, isVisible }) => {
    const [amount, setAmount] = useState('');

    const handleAmountChange = (value: string) => {
        setAmount(value);
    };


    return (
        <Modal isVisible={isVisible}>
            <View style={styles.modal}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Add funds to your wallet</Text>
                    <Text style={styles.description}>Enter the amount you want to deposit:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={handleAmountChange}
                    />
                    <Button icon='plus' text="Deposit" onPress={() => handleDeposit(amount)}/>
                </View>
            </View>
        </Modal>
    );
};

const styles = {
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        alignItems: 'center', 
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        marginBottom: 10,
    },
    input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
};

export default ModalDeposit;
