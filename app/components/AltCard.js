import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';
import AppButtonSmall from './AppButtonSmall';

function AltCard({ title, subtitle, image }) {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.detailContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButtonSmall title="Rent" color={colors.primary} />
                <AppButtonSmall title="Buy" color={colors.secondary} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
    },
    container: {
        backgroundColor: colors.light,
        borderRadius: 10,
        margin: 10,
        overflow: 'hidden',
        paddingBottom: 10,
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
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        color: colors.grey,
    },
});

export default AltCard;
