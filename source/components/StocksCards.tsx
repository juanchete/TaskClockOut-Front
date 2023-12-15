import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Row from './Row';
import { Stock } from '../features/home/interfaces';
import Icon from 'react-native-vector-icons/Feather';

const StockCardsComponent = ({shortName, name, close, difference, percentage, imageURL} : Stock) => {

    const isGrowing = difference > 0;

    return (
        <Row style={styles.container}>
            <View style={styles.leftBlock}>
                <Image source={{ uri: imageURL}} style={styles.circleImage} />
                <View>
                <Text style={styles.primaryText}>{shortName}</Text>
                <Text style={styles.secondaryText}>{name}</Text>
                </View>
            </View>
            <View style={styles.rightBlock}>
                <Text style={styles.primaryText}>${close}</Text>
                <Row>
                    <Icon name={isGrowing ? 'trending-up' : "trending-down"} size={15} color={isGrowing ? "#4ba651" : "#b84743"}  />
                    <Text style={isGrowing ? styles.secondaryTextGreen: styles.secondaryTextRed}>  {isGrowing && "$"}{difference.toFixed(2)}{!isGrowing && "%"} (${percentage.toFixed(2)}%)`</Text>
                </Row>
            </View>
        </Row>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    leftBlock: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circleImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 8,
    },
    primaryText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    secondaryText: {
        color: 'gray',
        fontSize: 14,
    },
    rightBlock: {
        alignItems: 'flex-end',
    },
    secondaryTextGreen: {
        color: '#4ba651',
        fontSize: 14,
    },
    secondaryTextRed: {
        color: '#b84743',
        fontSize: 14,
    },
});

export default StockCardsComponent;
