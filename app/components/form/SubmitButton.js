import { StyleSheet } from 'react-native';

import { useFormikContext } from 'formik';

import colors from '../../config/colors';
import AppButton from '../AppButton';

function SubmitButton({
    title,
    color = colors.primary,
    hoverColor = colors.dark,
}) {
    const { handleSubmit } = useFormikContext();

    return (
        <AppButton
            color={color}
            onPress={handleSubmit}
            style={styles.button}
            title={title}
            textColor={colors.light}
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
