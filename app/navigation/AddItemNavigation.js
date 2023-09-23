import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import colors from '../config/colors';

function AddItemNavigation({ borderColor, size, color }) {
    return (
        <View
            style={{
                height: 36,
                width: 36,
                borderRadius: 18,
                borderWidth: 5,
                borderColor: borderColor,
                backgroundColor: colors.light,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <MaterialCommunityIcons name="plus" size={size} color={color} />
        </View>
    );
}

export default AddItemNavigation;
