import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

function Card({ title, subtitle, image }) {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.detailContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text>{subtitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 10,
        margin: 20,
        marginTop: 100,
        overflow: 'hidden',
    },
    detailContainer: {
        padding: 10,
        marginBottom: 5,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default Card;
