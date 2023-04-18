import { View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

function IconFloat({
    backgroundColor,
    color = 'white',
    name,
    size = 30,
    position,
}) {
    return (
        <View
            style={{
                alignItems: 'center',
                backgroundColor: backgroundColor,
                height: size * 1.5,
                justifyContent: 'center',
                width: size * 1.5,
                position: 'absolute',
                ...position,
            }}
        >
            <MaterialCommunityIcons color={color} name={name} size={size} />
        </View>
    );
}

export default IconFloat;
