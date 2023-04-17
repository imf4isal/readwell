import { StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppButton from './AppButton';

import { useFormikContext } from 'formik';

function SubmitButton({ title }) {
    const { handleSubmit } = useFormikContext();

    return (
        <AppButton
            title={title}
            color={colors.primary}
            textColor={colors.light}
            style={styles.button}
            onPress={handleSubmit}
        />
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
    },
});

export default SubmitButton;
