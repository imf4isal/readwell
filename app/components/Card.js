import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import colors from '../config/colors';

function Card({ title, subtitle, image, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: image }} />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title} numberOfLines={1}>
                        {title}
                    </Text>
                    <Text style={styles.subTitle} numberOfLines={2}>
                        {subtitle}
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
        elevation: 3,
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold',
    },
    title: {
        marginBottom: 7,
        fontSize: 18,
    },
});

export default Card;
