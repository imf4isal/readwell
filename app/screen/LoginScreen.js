import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';

function LoginScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
                placeholder="Email Address"
                textContentType="emailAddress"
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                secureTextEntry={true}
                onChangeText={(password) => setEmail(password)}
                placeholder="Password"
                textContentType="password"
            />
            <AppButton
                title="Login"
                color={colors.primary}
                textColor={colors.light}
                style={styles.button}
            />
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
