import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ListItem from '../components/ListItem';
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
                <Text style={styles.subTitle}>100 BDT</Text>
            </View>
            <View style={styles.user}>
                <ListItem
                    image={require('../assets/people3.jpg')}
                    title="Samir Hassan"
                    subTitle="3 Listings"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    details: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold',
    },
    title: {
        marginBottom: 7,
        fontSize: 22,
        fontWeight: 'bold',
    },
    user: {
        // marginVertical: 40,
        marginLeft: 5,
    },
});

export default ProductDetailsScreen;
