import { FlatList, StyleSheet } from 'react-native';

import CardAlt from './CardAlt';
import Screen from './Screen';

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

function ProductListScreen(props) {
    return (
        <Screen>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CardAlt
                        title={item.title}
                        writer={item.writer}
                        image={item.image}
                    />
                )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {},
});

export default ProductListScreen;
