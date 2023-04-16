import React from 'react';

import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';

import { FlatList, StyleSheet, View } from 'react-native';
import ListItemSeparator from '../components/Separator';
const profileMenu = [
    {
        title: 'Bookmarks',
        icon: {
            name: 'bookmark',
            color: colors.light,
            backgroundColor: colors.secondary,
        },
    },
    {
        title: 'Messages',
        icon: {
            name: 'message',
            color: colors.light,
            backgroundColor: colors.secondary,
        },
    },
    {
        title: 'Added Books',
        icon: {
            name: 'book',
            color: colors.light,
            backgroundColor: colors.secondary,
        },
    },
];

function ProfileScreen(props) {
    return (
        <Screen>
            <View style={styles.section}>
                <ListItem
                    image={require('../assets/people.jpg')}
                    title="Faisal"
                    subTitle="itsfaisal@gmail.com"
                />
            </View>
            <View style={styles.section}>
                <FlatList
                    data={profileMenu}
                    keyExtractor={(menu) => menu.title}
                    renderItem={({ item }) => (
                        <ListItem
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    color={item.icon.color}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            title={item.title}
                            onPress={() => {}}
                        />
                    )}
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View>
            <View style={styles.section}>
                <ListItem
                    IconComponent={
                        <Icon
                            name="logout"
                            color={colors.light}
                            backgroundColor={colors.primary}
                        />
                    }
                    // image={require('./app/assets/people.jpg')}
                    title="Log out"
                    onPress={() => {}}
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    section: {
        marginVertical: 20,
    },
});

export default ProfileScreen;
