import { StyleSheet, TextInput, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';

function AppTextInput({ icon, ...otherprops }) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                name={icon}
                size={20}
                color="grey"
                style={styles.icon}
            />
            <TextInput style={styles.input} {...otherprops} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'grey',
        margin: 10,
        borderRadius: 10,
        padding: 10,
        backgroundColor: colors.light,
        elevation: 10,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        fontSize: 18,
        color: 'grey',
    },
});

export default AppTextInput;
