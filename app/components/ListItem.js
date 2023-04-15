import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function ListItem({ image, title, subTitle }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} resizeMode="contain" />
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text>{subTitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginRight: 15,
    },
    title: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    subTitle: {},
});

export default ListItem;
