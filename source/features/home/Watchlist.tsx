import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import StockCardsComponent from '../../components/StocksCards';
import TitleLink from '../../components/TitleLink';

interface Stock {
    name: string;
    shortName: string;
    value: number;
    isGrowing: boolean;
    percemtage: string;
}

const Watchlist: React.FC = () => {
    const stocks: Stock[] = [
        { name: 'Stock A', shortName: "STB",value: 100, isGrowing: true, percemtage: "$10.56 (0.48%)" },
        { name: 'Stock B', shortName: "STB",value: 200, isGrowing: false , percemtage: "$10.56 (0.48%)"},
        { name: 'Stock C', shortName: "STB",value: 150, isGrowing: true, percemtage: "$10.56 (0.48%)" },
        { name: 'Stock D', shortName: "STB",value: 180, isGrowing: false , percemtage: "$10.56 (0.48%)"},
        { name: 'Stock E', shortName: "STB",value: 120, isGrowing: true, percemtage: "$10.56 (0.48%)" },
        { name: 'Stock A', shortName: "STB",value: 100, isGrowing: true, percemtage: "$10.56 (0.48%)" },
        { name: 'Stock B', shortName: "STB",value: 200, isGrowing: false , percemtage: "$10.56 (0.48%)"},
        { name: 'Stock C', shortName: "STB",value: 150, isGrowing: true, percemtage: "$10.56 (0.48%)" },
        { name: 'Stock D', shortName: "STB",value: 180, isGrowing: false , percemtage: "$10.56 (0.48%)"},
        { name: 'Stock E', shortName: "STB",value: 120, isGrowing: true, percemtage: "$10.56 (0.48%)" },
    ];

    return (
        <View style={styles.container}>
            <ScrollView>
                <TitleLink title="Watchlist" text="All" iconName="arrow-right-thin" />
                {stocks.map((stock, index) => (
                    <StockCardsComponent name={stock.name} shortName={stock.shortName} value={stock.value} key={index} isGrowing={stock.isGrowing} percemtage={stock.percemtage}/>
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
