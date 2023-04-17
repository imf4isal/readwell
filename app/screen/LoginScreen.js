import { StyleSheet, View } from 'react-native';
import AppFormField from '../components/AppFormField';

import * as Yup from 'yup';
import AppForm from '../components/AppForm';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen(props) {
    return (
        <View style={styles.container}>
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    placeholder="Email Address"
                    textContentType="emailAddress"
                />
                <AppFormField
                    name="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    secureTextEntry={true}
                    placeholder="Password"
                    textContentType="password"
                />
                <SubmitButton title="Log In" />
            </AppForm>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        verticalAlign: 'center',
        padding: 20,
    },
});

export default LoginScreen;
