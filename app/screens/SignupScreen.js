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
    fullName: Yup.string().required().label('Full Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
    confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref('password'), null], 'Password must be match')
        .label('Confirm Password'),
});

function SignupScreen(props) {
    return (
        <ImageBackground
            source={require('../assets/signupback.png')}
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
                <Text style={styles.header}>Sign Up</Text>

                <Text style={styles.subtitle}>
                    Welcome. Start trading old books!
                </Text>
            </View>
            <AppForm
                initialValues={{
                    fullname: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="fullname"
                    autoCorrect={false}
                    icon="account"
                    placeholder="Full Name"
                    focus
                />
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
                <AppFormField
                    name="confirmPassword"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    secureTextEntry={true}
                    placeholder="Confirm Password"
                    textContentType="password"
                />
                <SubmitButton
                    title="Sign up"
                    color="secondary"
                    hoverColor="secondaryB"
                />

                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.signup}>Log in</Text>
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

export default SignupScreen;
