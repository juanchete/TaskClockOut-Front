import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Row from './Row';
import { Stock } from '../features/home/interfaces';


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
                <Text style={isGrowing ? styles.secondaryTextGreen: styles.secondaryTextRed}>{`${isGrowing ? "+" : "-"}${difference} (${percentage.toFixed(2)}%)`}</Text>
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
        color: 'green',
        fontSize: 14,
    },
    secondaryTextRed: {
        color: 'red',
        fontSize: 14,
    },
});

export default StockCardsComponent;
