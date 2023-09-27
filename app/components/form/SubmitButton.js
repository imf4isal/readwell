import { StyleSheet, View } from 'react-native';

import { useFormikContext } from 'formik';

import colors from '../../config/colors';
import AppButton from '../AppButton';

function SubmitButton({ title, color = 'primary', hoverColor = colors.dark }) {
    const { handleSubmit } = useFormikContext();

    return (
        <View style={styles.container}>
            <AppButton
                color={color}
                onPress={handleSubmit}
                style={styles.button}
                title={title}
                hoverColor={hoverColor}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 20,
    },
    container: {
        paddingHorizontal: 5,
    },
});

export default SubmitButton;
