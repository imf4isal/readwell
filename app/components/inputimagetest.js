import { StyleSheet } from 'react-native';

import { useEffect, useState } from 'react';
import ImageInput from './app/components/ImageInput';
import Screen from './app/components/Screen';

import * as ImagePicker from 'expo-image-picker';
import { Button, Image } from 'react-native';

export default function App() {
    const [imageUri, setImageUri] = useState();

    const reqPer = async () => {
        const result = await ImagePicker.requestCameraPermissionsAsync();
        if (!result.granted) alert('you need to give permission.');
    };

    useEffect(() => {
        reqPer();
    }, []);

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync();

            if (!result.canceled) setImageUri(result.assets[0].uri);
        } catch (error) {
            console.log('there is a problem', error);
        }
    };

    return (
        <Screen>
            <Button title="choose image" onPress={selectImage} />
            <Image
                source={{ uri: imageUri }}
                style={{ width: 100, height: 100 }}
            />
            <ImageInput
                image={{ uri: imageUri }}
                onChangeImage={(uri) => setImageUri(uri)}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({});
