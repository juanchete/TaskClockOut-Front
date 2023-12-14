import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Row from './Row';

interface TitleLinkProps {
    title: string;
    text: string;
    iconName: string;
}

const TitleLink: React.FC<TitleLinkProps> = ({ title, text, iconName }) => {
    return (
        <Row style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.content}>
                <Text style={styles.text}>{text}</Text>
                <Icon name={iconName} color={'#898a8c'} size={20}/>
            </View>
        </Row>
    );
};
 
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    title: {
        fontSize: 25,
        color: 'white',
      },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginRight: 5,
        color: '#898a8c',
    },
});

export default TitleLink;
