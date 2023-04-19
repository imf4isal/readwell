import { FlatList, StyleSheet } from 'react-native';

import { useState } from 'react';
import CardAlt from './CardAlt';
import SearchBox from './SearchBox';

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
    const [books, setBooks] = useState(items);

    const searchBook = (val) => {
        //selfnote:  we should filter from the initial books instead of books(state), because when we already search for one time, then the book set to a few book, then next time we search something else, it will search from that few book instead of whole dataset.

        setBooks(
            items.filter((book) => {
                const bookTitle = book.title.toLowerCase();
                const bookWriter = book.writer.toLowerCase();
                const searchStr = val.toLowerCase();
                return (
                    bookTitle.includes(searchStr) ||
                    bookWriter.includes(searchStr)
                );
            })
        );
    };

    return (
        <>
            <SearchBox search={(val) => searchBook(val)} />
            <FlatList
                data={books}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CardAlt
                        title={item.title}
                        writer={item.writer}
                        image={item.image}
                    />
                )}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});

export default ProductListScreen;
