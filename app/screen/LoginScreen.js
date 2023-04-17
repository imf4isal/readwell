import { Formik } from 'formik';
import { StyleSheet, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';

import { Text } from 'react-native';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen(props) {
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors }) => (
                    <>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            onChangeText={handleChange('email')}
                            placeholder="Email Address"
                            textContentType="emailAddress"
                        />
                        <Text style={{ color: 'red' }}>{errors.email}</Text>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            secureTextEntry={true}
                            onChangeText={handleChange('password')}
                            placeholder="Password"
                            textContentType="password"
                        />
                        <Text style={{ color: 'red' }}>{errors.password}</Text>

                        <AppButton
                            title="Login"
                            color={colors.primary}
                            textColor={colors.light}
                            style={styles.button}
                            onPress={handleSubmit}
                        />
                    </>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        verticalAlign: 'center',
        padding: 20,
    },
    button: {
        marginTop: 20,
    },
});

export default LoginScreen;
