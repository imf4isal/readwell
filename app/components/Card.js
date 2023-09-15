import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

function Card({ title, subtitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 300,
        backgroundColor: 'white',
        borderRadius: 5,
        overflow: 'hidden',
        marginBottom: 25,
        elevation: 5,
    },
    details: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        marginBottom: 5,
        color: '#242424',
    },
    subtitle: {
        color: colors.secondary,
    },
    image: {
        width: '100%',
        height: 225,
    },
});

export default Card;
