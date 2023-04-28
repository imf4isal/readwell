import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import { useEffect } from 'react';
import { Alert } from 'react-native';
import colors from '../config/colors';

function ImageInput({ image, onChangeImage }) {
    useEffect(() => {
        reqPer();
    }, []);

    const reqPer = async () => {
        const result = await ImagePicker.requestCameraPermissionsAsync();
        if (!result.granted) alert('you need to give permission.');
    };

    const handlePress = () => {
        if (!image) selectImage();
        else
            Alert.alert('Delete', 'Are you sure you wanna delete this image?', [
                { text: 'Yes', onPress: () => onChangeImage(null) },
                { text: 'No' },
            ]);
    };

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });

            if (!result.canceled) onChangeImage(result.assets[0].uri);
        } catch (error) {
            console.log('Error uploading an image', error);
        }
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
