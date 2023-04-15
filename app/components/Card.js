import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

function Card({ title, subtitle, image, writer }) {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.detailContainer}>
                <View style={styles.detail}>
                    <View style={{ marginBottom: 10 }}>
                        <View style={{ marginBottom: 5 }}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.subtitle}>{writer}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons
                                style={{ marginVertical: 4, marginRight: 10 }}
                                name="check"
                                color={colors.grey}
                            />
                            <Text style={styles.subtitle}>
                                Available to rent.
                            </Text>
                        </View>
                    </View>
                    {/* <Text style={styles.subtitle}>{subtitle}</Text> */}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 10,
        margin: 10,
        overflow: 'hidden',
    },
    detailContainer: {
        padding: 10,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        color: colors.grey,
    },
});

export default Card;
