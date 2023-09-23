import React, { useEffect, useState } from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
    Alert,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import colors from '../config/colors';

function ImageInput(props) {
    const [image, setImage] = useState();

    const reqPermission = async () => {
        const result = await ImagePicker.requestCameraPermissionsAsync();

        if (!result.granted)
            alert('You need to give permission to access your photos.');
    };

    useEffect(() => {
        reqPermission();
    }, []);

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.9,
            });
            if (!result.canceled) setImage(result.assets[0].uri);
        } catch (error) {
            console.log('error reading a image.');
        }
    };

    const handlePress = () => {
        if (!image) selectImage();
        else
            Alert.alert('Delete', 'Are you sure you wanna delete this image?', [
                { text: 'Yes', onPress: () => setImage(null) },
                { text: 'No' },
            ]);
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!image && (
                    <MaterialCommunityIcons
                        name="camera"
                        color="grey"
                        size={40}
                    />
                )}
                {image && (
                    <Image source={{ uri: image }} style={styles.image} />
                )}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default ImageInput;
