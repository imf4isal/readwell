import { Image, StyleSheet, Text } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import colors from '../config/colors';

import AppButtonSmall from './AppButtonSmall';

function CardAlt({ title, subtitle, image, writer }) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} resizeMode="cover" />
            </View>
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
                <View style={styles.buttonContainer}>
                    <AppButtonSmall title="Rent" color={colors.primary} />
                    <AppButtonSmall title="Detail" color={colors.secondary} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        left: 10,
        bottom: 0,
        flexDirection: 'row',
    },
    container: {
        backgroundColor: colors.light,
        borderRadius: 10,
        margin: 10,
        overflow: 'hidden',
        padding: 5,
        flexDirection: 'row',
    },
    detail: {
        marginLeft: 5,
    },
    detailContainer: {
        padding: 10,
        flex: 1,
    },
    imageContainer: {
        shadowColor: colors.grey,
        elevation: 20,
        borderRadius: 10,
        shadowOpacity: 1,
        shadowOffset: { width: 5, heigh: 5 },
    },
    image: {
        width: 150,
        height: 150,
        margin: 5,
        borderRadius: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        color: colors.grey,
    },
});

export default CardAlt;
