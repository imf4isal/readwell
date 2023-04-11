import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            source={require('../assets/background-welcome.jpg')}
            style={styles.container}
        >
            <AppButton
                title="LOG IN"
                color={colors.primary}
                textColor={colors.light}
                borderColor={colors.primaryC}
            />
            <AppButton
                title="SIGN UP"
                color={colors.secondary}
                textColor={colors.light}
                borderColor={colors.secondaryC}
            />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 20,
    },

    signupButton: {
        width: '100%',
        height: 80,
        backgroundColor: colors.secondary,
    },
});

export default WelcomeScreen;
