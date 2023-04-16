import React from 'react';
import { View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

function Icon({ name, color = 'white', backgroundColor = 'black', size = 50 }) {
    return (
        <View
            style={{
                height: size,
                width: size,
                borderRadius: size / 2,
                backgroundColor,
                justifyContent: 'center',
                alignItems: 'center',
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
