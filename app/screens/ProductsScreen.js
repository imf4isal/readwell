import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Card from '../components/Card';

const items = [
    {
        id: 1,
        title: 'Atomic Habit',
        writer: 'James Clear',
        price: 100,
        image: require('../assets/products/atomicHabit.jpg'),
    },
    {
        id: 2,
        title: 'Milk and Honey',
        writer: 'Rupi Kaur',
        price: 100,
        image: require('../assets/products/milkandhoney.jpg'),
    },
    {
        id: 3,
        title: 'The Subtle Art of Not Giving a Fuck',
        writer: 'Mark Manson',
        price: 100,
        image: require('../assets/products/book.jpg'),
    },
    {
        id: 4,
        title: 'Book Set',
        writer: '',
        price: 100,
        image: require('../assets/products/organizedbook.jpg'),
    },
    {
        id: 5,
        title: 'Atomic Habit',
        writer: 'James Clear',
        price: 100,
        image: require('../assets/products/atomicHabit.jpg'),
    },
];

function ProductsScreen(props) {
    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={items.id}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subtitle={item.price}
                        image={item.image}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});

export default ProductsScreen;
