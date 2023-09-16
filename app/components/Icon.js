import { MaterialCommunityIcons } from '@expo/vector-icons';

import React from 'react';
import { View } from 'react-native';

function Icon({ name, backgroundColor = 'black', color = 'white', size = 50 }) {
    return (
        <View
            style={{
                height: size,
                width: size,
                borderRadius: size / 2,
                backgroundColor,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 10,
                padding: 5,
            }}
        >
            <MaterialCommunityIcons
                name={name}
                color={color}
                size={size * 0.5}
            />
        </View>
    );
}

export default Icon;
