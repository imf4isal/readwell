import React from 'react';
import { Text, View } from 'react-native';

function AppButton({ title, color, textColor, border }) {
    return (
        <View
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
                    fontSize: 20,
                    letterSpacing: 3,
                    color: textColor,
                }}
            >
                {title}
            </Text>
        </View>
    );
}

export default AppButton;
