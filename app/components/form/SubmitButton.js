import { StyleSheet } from 'react-native';

import { useFormikContext } from 'formik';

import colors from '../../config/colors';
import AppButton from '../AppButton';

function SubmitButton({ title }) {
    const { handleSubmit } = useFormikContext();

    return (
        <AppButton
            color={colors.primary}
            onPress={handleSubmit}
            style={styles.button}
            title={title}
            textColor={colors.light}
        />
    );
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 20,
    },
});

export default SubmitButton;
