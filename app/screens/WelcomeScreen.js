import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
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
                {/* <Text>Buy and Sell Old Book!</Text> */}
            </View>
            <View style={styles.login}></View>
            <View style={styles.register}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
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
    },
    register: {
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary,
    },
});

export default WelcomeScreen;
