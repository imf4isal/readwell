import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

function AppButtonSmall({ title, color }) {
    return (
        <TouchableHighlight
            style={{
                alignSelf: 'flex-start',
                backgroundColor: color,
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 5,
                margin: 5,
            }}
            onPress={() => {}}
        >
            <Text
                style={{
                    color: 'white',
                    fontSize: 16,
                    letterSpacing: 2,
                }}
            >
                {title}
            </Text>
        </TouchableHighlight>
    );
}

export default AppButtonSmall;
