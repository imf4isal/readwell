import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItemDeleteAction from '../../ref/app/components/ListItemDeleteAction';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from './Screen';

const initialMessages = [
    {
        id: 2,
        title: 'Jenny Doe',
        description: 'saw your book today, wanna talk about sale?',
        image: require('../assets/people1.jpg'),
    },
    {
        id: 3,
        title: 'John R',
        description: 'here is my email: faisalabdullah@gmail.com',
        image: require('../assets/people2.jpg'),
    },
    {
        id: 4,
        title: 'Sadman Asif',
        description:
            'sorry, cant give this at this price. if you can reconsider, contact again.',
        image: require('../assets/people3.jpg'),
    },
];

function MessageScreen(props) {
    const [messages, setMessages] = useState(initialMessages);

    const handleDelete = (item) =>
        setMessages(messages.filter((msg) => item.id !== msg.id));
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(msg) => msg.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => {}}
                        renderRightActions={() => (
                            <ListItemDeleteAction
                                onPress={() => handleDelete(item)}
                            />
                        )}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {},
});

export default MessageScreen;
