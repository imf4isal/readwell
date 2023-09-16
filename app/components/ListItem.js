import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function ListItem({ title, subTitle, image, IconComponent }) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {IconComponent}
                {image && <Image style={styles.image} source={image} />}
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    detailsContainer: { marginLeft: 15 },
    image: {
        height: 70,
        width: 70,
        borderRadius: 50,
    },
    imageContainer: {
        elevation: 10,
        borderRadius: 20,
    },
    title: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    subTitle: {
        letterSpacing: 1.2,
    },
});

export default ListItem;
