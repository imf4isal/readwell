import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

function ProductDetailsScreen(props) {
    return (
        <View>
            <Image
                style={styles.image}
                source={require('../assets/atomichabit.jpg')}
            />
            <View style={styles.details}>
                <Text style={styles.title}>Atomic Habit</Text>
                <Text style={styles.subtitle}>120 BDT</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    details: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        marginBottom: 5,
        color: '#242424',
    },
    subtitle: {
        color: colors.secondaryB,
    },
    image: {
        width: '100%',
        height: 225,
    },
});

export default ProductDetailsScreen;
