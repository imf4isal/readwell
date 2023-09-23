import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import * as Yup from 'yup';

import AppForm from '../components/form/AppForm';
import AppFormField from '../components/form/AppFormField';
import SubmitButton from '../components/form/SubmitButton';

import colors from '../config/colors';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen({ navigation }) {
    return (
        <ImageBackground
            source={require('../assets/loginback.png')}
            resizeMode="stretch"
            style={styles.container}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo-readwell.png')}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.heading}>
                <Text style={styles.header}>Log In</Text>

                <Text style={styles.subtitle}>
                    Welcome back. You have been missed!
                </Text>
            </View>
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
                    focus
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
                <SubmitButton title="Log In" hoverColor="primaryB" />

                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Don't have an account?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}
                    >
                        <Text style={styles.signup}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </AppForm>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 15,
    },
    header: {
        fontSize: 48,
        fontWeight: 'bold',
        color: colors.dark,
        letterSpacing: 1,
        marginBottom: 10,
    },
    heading: {
        marginBottom: 60,
        marginHorizontal: 10,
    },
    logo: { width: 100, height: 60 },
    logoContainer: {
        position: 'absolute',
        top: 50,
        left: 25,
    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    subtitle: {
        fontSize: 18,
        letterSpacing: 1,
    },
    signup: {
        fontSize: 18,
        letterSpacing: 1,
        color: colors.primary,
        textDecorationLine: 'underline',
        marginLeft: 5,
    },
});

export default LoginScreen;
