import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import colors from '../config/colors';

function AddItemNavigation({ color }) {
    return (
        <View
            style={{
                alignItems: 'center',
                backgroundColor: color,
                borderColor: colors.white,
                borderRadius: 40,
                borderWidth: 10,
                bottom: 20,
                height: 80,
                justifyContent: 'center',
                width: 80,
            }}
        >
            <MaterialCommunityIcons
                name="plus"
                size={40}
                color={colors.white}
            />
        </View>
    );
}

export default AddItemNavigation;
