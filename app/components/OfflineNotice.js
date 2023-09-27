import { useNetInfo } from '@react-native-community/netinfo';
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';

function OfflineNotice(props) {
    const netInfo = useNetInfo();

    console.log(netInfo);
    if (netInfo.isInternetReachable === false)
        return (
            <View style={styles.container}>
                <Text style={styles.text}>No Internet Connection</Text>
            </View>
        );

    return null;
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        height: 50,
        justifyContent: 'center',
        position: 'absolute',
        top: StatusBar.height,
        width: '100%',
        zIndex: 1,
    },
    text: {
        color: colors.white,
    },
});

export default OfflineNotice;
