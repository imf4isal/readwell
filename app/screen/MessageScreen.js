import React from 'react';
import { FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/Separator';

const messages = [
    {
        id: 1,
        title: 'Faisal',
        description:
            'hey! I wanna buy your listed product. Lets talk about it.',
        image: require('../assets/people.jpg'),
    },
    {
        id: 2,
        title: 'John Doe',
        description: 'faisalabdullah@gmail.com',
        image: require('../assets/people.jpg'),
    },
];

function MessageScreen(props) {
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
                        renderRightActions={() => <ListItemDeleteAction />}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    );
}

export default MessageScreen;
