import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

function AppButton({ title, color, textColor, border }) {
    return (
        <TouchableHighlight
            onPress={() => {}}
            style={{
                alignItems: 'center',
                backgroundColor: color,
                borderColor: border,
                borderRadius: 50,
                borderWidth: border && 1,
                justifyContent: 'center',
                height: 55,
                marginBottom: 20,
                width: '100%',
            }}
        >
            <Text
                style={{
                    color: textColor,
                    fontSize: 20,
                    letterSpacing: 3,
                }}
            >
                {title}
            </Text>
        </TouchableHighlight>
    );
}

export default AppButton;
