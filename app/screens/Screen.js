import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

function Screen({ children }) {
    return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
    },
});

export default Screen;
