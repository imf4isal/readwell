import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fragment, useState } from 'react';
import { Button, FlatList, Modal, Text } from 'react-native';

import PickerItem from './PickerItem';

import colors from '../config/colors';

function AppPicker({ icon, items, placeholder, onSelect, selectedItem }) {
    const [visible, setVisible] = useState(false);

    return (
        <Fragment>
            <TouchableWithoutFeedback onPress={() => setVisible(true)}>
                <View style={styles.container}>
                    <MaterialCommunityIcons
                        name={icon}
                        size={20}
                        color="grey"
                        style={styles.icon}
                    />
                    <Text style={styles.text}>
                        {selectedItem ? selectedItem.title : placeholder}
                    </Text>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color="grey"
                        style={styles.icon}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={visible} animationType="slide">
                <Button title="close" onPress={() => setVisible(false)} />
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <PickerItem
                            title={item.title}
                            onPress={() => {
                                setVisible(false);
                                onSelect(item);
                            }}
                        />
                    )}
                />
            </Modal>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
        padding: 10,
        backgroundColor: colors.light,
        elevation: 10,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        fontSize: 18,
        color: 'grey',
        flex: 1,
    },
});

export default AppPicker;
