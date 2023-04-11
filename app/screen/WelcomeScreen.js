import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            source={require('../assets/background-welcome.jpg')}
            style={styles.container}
        >
            <View style={styles.loginButton}>
                <Text style={styles.buttonText}>Button</Text>
            </View>

            <View style={styles.signupButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    loginButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 80,
        backgroundColor: colors.primary,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        letterSpacing: 3,
    },
    signupButton: {
        width: '100%',
        height: 80,
        backgroundColor: colors.secondary,
    },
});

export default WelcomeScreen;
