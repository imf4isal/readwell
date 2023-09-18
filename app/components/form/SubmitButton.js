import { StyleSheet } from 'react-native';

import { useFormikContext } from 'formik';

import colors from '../../config/colors';
import AppButton from '../AppButton';

function SubmitButton({ title, color = 'primary', hoverColor = colors.dark }) {
    const { handleSubmit } = useFormikContext();

    return (
        <AppButton
            color={color}
            onPress={handleSubmit}
            style={styles.button}
            title={title}
            hoverColor={hoverColor}
        />
    );
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 20,
    },
});

export default SubmitButton;
