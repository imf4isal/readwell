import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import colors from '../config/colors';

function AppButton({ title, color, onPress, hoverColor }) {
    return (
        <TouchableHighlight
            onPress={onPress}
            style={[styles.button, { backgroundColor: colors[color] }]}
            underlayColor={colors[hoverColor]}
        >
            <Text style={styles.buttonTitle}>{title}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonTitle: {
        color: 'white',
        textTransform: 'uppercase',
        letterSpacing: 2,
        fontWeight: '600',
    },
});

export default AppButton;
