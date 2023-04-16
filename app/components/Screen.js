import Constants from 'expo-constants';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

function Screen({ children }) {
    return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
    screen: {
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingTop: Constants.statusBarHeight,
    },
});

export default Screen;
