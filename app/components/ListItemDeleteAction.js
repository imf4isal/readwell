import React from 'react';
import { StyleSheet, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';

function ListItemDeleteAction({ onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    style={styles.icon}
                    name="trash-can"
                    size={40}
                    color={colors.primary}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container: {
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        height: 50,
        width: 50,
    },
});

export default ListItemDeleteAction;
