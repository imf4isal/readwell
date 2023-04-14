import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';

function ProductImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.deleteButton} />
            <View style={styles.closeButton} />
            <Image
                resizeMode="contain"
                style={styles.productimage}
                source={require('../assets/products/organizedbook.jpg')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.dark,
        flex: 1,
    },
    deleteButton: {
        height: 50,
        width: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 60,
        left: 20,
    },
    closeButton: {
        height: 50,
        width: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 60,
        right: 20,
    },
    productimage: {
        width: '100%',
        height: '100%',
    },
});

export default ProductImageScreen;
