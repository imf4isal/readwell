import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import {
    GestureHandlerRootView,
    Swipeable,
} from 'react-native-gesture-handler';
import colors from '../config/colors';

function ListItem({
    IconComponent,
    image,
    title,
    subTitle,
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
                        {IconComponent}
                        {image && (
                            <Image
                                style={styles.image}
                                source={image}
                                resizeMode="contain"
                            />
                        )}
                        <View style={styles.detailContainer}>
                            <Text style={styles.title}>{title}</Text>
                            {subTitle && (
                                <Text numberOfLines={1}>{subTitle}</Text>
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
    detailContainer: {
        flex: 1,
        marginLeft: 15,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
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
