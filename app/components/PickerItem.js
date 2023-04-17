import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function PickerItem({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.pickerItems} onPress={onPress}>
            <Text style={styles.item}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        padding: 10,
    },
    pickerItems: {
        alignItems: 'center',
        marginTop: 20,
    },
});

export default PickerItem;
