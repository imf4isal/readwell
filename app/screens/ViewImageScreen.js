import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={require('../assets/atomichabit.jpg')}
            />
            <View style={styles.delete}></View>
            <View style={styles.close}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    delete: {
        height: 40,
        width: 40,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 20,
        left: 20,
    },
    close: {
        height: 40,
        width: 40,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 20,
        right: 20,
    },
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default ViewImageScreen;
