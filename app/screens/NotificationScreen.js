import React, { useState } from 'react';

import { FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from './Screen';

const initialNotification = [
    {
        id: 2,
        title: 'Ordered successfull',
        description: 'the book order you have placed has been successfull.',
    },
    {
        id: 3,
        title: 'Check out new book!',
        description:
            'we have added 10 amazing non fiction books today. check it out!',
    },
    {
        id: 4,
        title: 'Submission has not been approved',
        description:
            'The book you have submitted has not been approved because of its bad condition.',
    },
];

const refreshedNotification = [
    {
        id: 1,
        title: 'Recieve your book today',
        description: 'hey! I wanna buy your listed books. Lets talk about it.',
    },
    {
        id: 2,
        title: 'Ordered successfull',
        description: 'the book order you have placed has been successfull.',
    },
    {
        id: 3,
        title: 'Check out new book!',
        description:
            'we have added 10 amazing non fiction books today. check it out!',
    },
    {
        id: 4,
        title: 'Submission has not been approved',
        description:
            'The book you have submitted has not been approved because of its bad condition.',
    },
];

function NotificationScreen(props) {
    const [notifications, setNotifications] = useState(initialNotification);

    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (item) => {
        setNotifications(notifications.filter((n) => n.id !== item.id));
    };

    return (
        <Screen>
            <FlatList
                data={notifications}
                keyExtractor={(notification) => notification.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
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
                onRefresh={() => setNotifications(refreshedNotification)}
            />
        </Screen>
    );
}

export default NotificationScreen;
