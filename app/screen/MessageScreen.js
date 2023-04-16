import React, { useState } from 'react';
import { FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/Separator';

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

const refreshedMessage = [
    {
        id: 1,
        title: 'Faisal',
        description: 'hey! I wanna buy your listed books. Lets talk about it.',
        image: require('../assets/people.jpg'),
    },
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
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (item) => {
        setMessages(messages.filter((m) => m.id !== item.id));
    };

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        image={item.image}
                        title={item.title}
                        subTitle={item.description}
                        onPress={() => console.log(item)}
                        renderRightActions={() => (
                            <ListItemDeleteAction
                                onPress={() => handleDelete(item)}
                            />
                        )}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => setMessages(refreshedMessage)}
            />
        </Screen>
    );
}

export default MessageScreen;
