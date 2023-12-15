import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import StockCardsComponent from '../../../components/StocksCards';
import TitleLink from '../../../components/TitleLink';

interface Stock {
    name: string;
    shortName: string;
    close: number;
    difference: number;
    percentage: number;
}

const Watchlist = ({stocks} : {stocks: [Stock]}) => {
    // const stocks: Stock[] = [
    //     { name: 'Stock A', shortName: "STB",close: 100, difference: 8767, percentage: 0.45 },
    //     { name: 'Stock B', shortName: "STB",close: 200, difference: -874 , percentage: 0.45},
    //     { name: 'Stock C', shortName: "STB",close: 150, difference: 8767, percentage: 0.45 },
    //     { name: 'Stock D', shortName: "STB",close: 180, difference: -874 , percentage: 0.45},
    //     { name: 'Stock E', shortName: "STB",close: 120, difference: 8767, percentage: 0.45 },
    //     { name: 'Stock A', shortName: "STB",close: 100, difference: 8767, percentage: 0.45 },
    //     { name: 'Stock B', shortName: "STB",close: 200, difference: -874 , percentage: 0.45},
    //     { name: 'Stock C', shortName: "STB",close: 150, difference: 8767, percentage: 0.45 },
    //     { name: 'Stock D', shortName: "STB",close: 180, difference: -874 , percentage: 0.45},
    //     { name: 'Stock E', shortName: "STB",close: 120, difference: 8767, percentage: 0.45 },
    // ];

    return (
        <View style={styles.container}>
            <ScrollView>
                <TitleLink title="Watchlist" text="All" iconName="arrow-right-thin" />
                {stocks.map((stock, index) => (
                    <StockCardsComponent name={stock.name} shortName={stock.shortName} close={stock.close} key={index} difference={stock.difference} percentage={stock.percentage}/>
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
