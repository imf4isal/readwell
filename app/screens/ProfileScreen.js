import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import useAuth from '../auth/useAuth';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import colors from '../config/colors';
import Screen from './Screen';

const profileMenu = [
    {
        title: 'Bookmarks',
        icon: 'bookmark',
    },
    {
        title: 'Messages',
        icon: 'message',
        targetScreen: 'Message',
    },
    {
        title: 'Added Books',
        icon: 'book',
    },
];

function ProfileScreen({ navigation }) {
    const { user, logout } = useAuth();

    return (
        <Screen>
            <View style={styles.section}>
                <ListItem
                    title={user.name}
                    subTitle={user.email}
                    image={require('../assets/people2.jpg')}
                />
            </View>
            <View style={styles.section}>
                <FlatList
                    data={profileMenu}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => (
                        <ListItem
                            IconComponent={
                                <Icon
                                    name={item.icon}
                                    color={colors.white}
                                    backgroundColor={colors.secondary}
                                />
                            }
                            title={item.title}
                            onPress={() =>
                                navigation.navigate(item.targetScreen)
                            }
                        />
                    )}
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View>
            <View style={styles.section}>
                <ListItem
                    IconComponent={
                        <Icon name="logout" backgroundColor={colors.primary} />
                    }
                    title="Logout"
                    onPress={() => logout()}
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
