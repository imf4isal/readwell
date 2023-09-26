import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text } from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import colors from '../config/colors';
import Screen from '../screens/Screen';

import listingsAPI from '../api/listings';
import Card from '../components/Card';

// const items = [
//     {
//         id: 1,
//         title: 'Atomic Habit',
//         writer: 'James Clear',
//         price: 100,
//         image: require('../assets/products/atomicHabit.jpg'),
//     },
//     {
//         id: 2,
//         title: 'Milk and Honey',
//         writer: 'Rupi Kaur',
//         price: 100,
//         image: require('../assets/products/milkandhoney.jpg'),
//     },
//     {
//         id: 3,
//         title: 'The Subtle Art of Not Giving a Fuck',
//         writer: 'Mark Manson',
//         price: 100,
//         image: require('../assets/products/book.jpg'),
//     },
//     {
//         id: 4,
//         title: 'Book Set',
//         writer: '',
//         price: 100,
//         image: require('../assets/products/organizedbook.jpg'),
//     },
//     {
//         id: 5,
//         title: 'Atomic Habit',
//         writer: 'James Clear',
//         price: 100,
//         image: require('../assets/products/atomicHabit.jpg'),
//     },
// ];

function ProductsScreen({ navigation }) {
    const [listings, setListings] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadListings();
    }, []);

    const loadListings = async () => {
        setLoading(true);
        const response = await listingsAPI.getListings();
        setLoading(false);

        if (!response.ok) return setError(true);

        setError(false);
        setListings(response.data);
    };

    return (
        <Screen style={styles.screen}>
            {error && (
                <>
                    <Text> Couldn't fetch books list. </Text>
                    <Button title="retry" onPress={loadListings} />
                </>
            )}
            <ActivityIndicator visible={true} />
            <Text>Test</Text>
            <FlatList
                data={listings}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subtitle={`${item.price} BDT`}
                        image={item.images[0].url}
                        onPress={() => navigation.navigate('BookDetails', item)}
                    />
                )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor: colors.light,
    },
});

export default ProductsScreen;
