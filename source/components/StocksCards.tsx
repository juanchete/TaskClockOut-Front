import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Row from './Row';

interface Stock {
    shortName: string;
    name: string;
    value: number;
    isGrowing: boolean;
    percemtage:string;
}

const StockCardsComponent = ({shortName, name, value, isGrowing, percemtage} : Stock) => {
    return (
        <Row style={styles.container}>
            <View style={styles.leftBlock}>
                <Image source={{ uri: "https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs"}} style={styles.circleImage} />
                <View>
                <Text style={styles.primaryText}>{shortName}</Text>
                <Text style={styles.secondaryText}>{name}</Text>
                </View>
            </View>
            <View style={styles.rightBlock}>
                <Text style={styles.primaryText}>${value}</Text>
                <Text style={isGrowing ? styles.secondaryTextGreen: styles.secondaryTextRed}>{`${isGrowing ? "+" : "-"}${percemtage}`}</Text>
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
