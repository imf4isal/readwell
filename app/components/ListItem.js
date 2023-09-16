import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import colors from '../config/colors';

import {
    GestureHandlerRootView,
    Swipeable,
} from 'react-native-gesture-handler';

function ListItem({
    title,
    subTitle,
    image,
    IconComponent,
    onPress,
    renderRightActions,
}) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight
                    underlayColor={colors.light}
                    onPress={onPress}
                >
                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            {IconComponent}
                            {image && (
                                <Image style={styles.image} source={image} />
                            )}
                        </View>
                        <View style={styles.detailsContainer}>
                            <Text style={styles.title}>{title}</Text>
                            {subTitle && (
                                <Text style={styles.subTitle} numberOfLines={1}>
                                    {subTitle}
                                </Text>
                            )}
                        </View>
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    detailsContainer: { flex: 1, marginLeft: 15 },
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
