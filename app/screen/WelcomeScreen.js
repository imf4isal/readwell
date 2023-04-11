import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            source={require('../assets/background-welcome.jpg')}
            style={styles.container}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo-readwell.png')}
                    resizeMode="contain"
                />
                <Text style={styles.tagline}>Trade old books</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton
                    title="LOG IN"
                    color={colors.primary}
                    textColor={colors.light}
                    border={colors.primaryC}
                />
                <AppButton
                    title="SIGN UP"
                    color={colors.secondary}
                    textColor={colors.light}
                    border={colors.secondaryC}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 20,
        filter: 'contrast(150%)',
    },
    logo: { width: 180, height: 60 },
    logoContainer: {
        position: 'absolute',
        top: 120,
        alignItems: 'center',
    },
    buttonContainer: {
        width: '100%',
    },
    tagline: {
        letterSpacing: 2,
        fontSize: 22,
        color: colors.dark,
        paddingVertical: 5,
    },
});

export default WelcomeScreen;
