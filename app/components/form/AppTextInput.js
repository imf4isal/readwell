import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/colors';

function AppTextInput({ icon, ...otherprops }) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={[styles.container, isFocused && styles.focused]}>
            <MaterialCommunityIcons
                name={icon}
                size={20}
                color="grey"
                style={styles.icon}
            />
            <TextInput
                style={styles.input}
                {...otherprops}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 10,
        elevation: 5,
        flexDirection: 'row',
        margin: 10,
        padding: 10,
    },
    focused: {
        borderColor: colors.dark,
        borderWidth: 0.5,
        elevation: 15,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        color: 'grey',
        fontSize: 18,
    },
});

export default AppTextInput;
