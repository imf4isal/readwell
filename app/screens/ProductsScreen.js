import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import colors from '../config/colors';
import Screen from '../screens/Screen';

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

function ProductsScreen({ navigation }) {
    // const [listings, setListings] = useState([]);

    // useEffect(() => {
    //     loadListings();
    // }, []);

    // const loadListings = async () => {
    //     const response = await listingsAPI.getListings();
    //     setListings(response.data);
    //     console.log(response.data);
    // };

    return (
        <Screen style={styles.screen}>
            <FlatList
                data={items}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subtitle={`${item.price} BDT`}
                        image={item.image}
                        onPress={() =>
                            navigation.navigate('BookDetails', {
                                ...item,
                            })
                        }
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
