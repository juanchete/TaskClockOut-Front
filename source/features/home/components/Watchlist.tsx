import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import StockCardsComponent from '../../../components/StocksCards';
import TitleLink from '../../../components/TitleLink';
import { Stock } from '../interfaces';


const Watchlist = ({stocks} : {stocks: [Stock]}) => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <TitleLink title="Watchlist" text="All" iconName="arrow-right-thin" />
                {stocks.map((stock, index) => (
                    <StockCardsComponent name={stock.name} shortName={stock.shortName} close={stock.close} key={index} difference={stock.difference} percentage={stock.percentage} imageURL={stock.imageURL}/>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1e1f',
        height: 300
    },
    stockContainer: {
        marginVertical: 10,
    },
});

export default Watchlist;
