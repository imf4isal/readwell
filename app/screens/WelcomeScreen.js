import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background-md.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo-red.png')}
                />
                <Text style={styles.tagline}>New Homes for Old Books</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" color="primary" />
                <AppButton title="Signup" color="secondary" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 10,
    },
    login: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
    },
    logo: {
        width: 150,
        height: 50,
        resizeMode: 'contain',
    },
    logoContainer: {
        position: 'absolute',
        top: 100,
        alignItems: 'center',
    },
    register: {
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary,
    },
    tagline: {
        letterSpacing: 1.5,
        fontSize: 16,
        marginTop: 5,
        fontWeight: '600',
        color: '#242424',
    },
});

export default WelcomeScreen;
