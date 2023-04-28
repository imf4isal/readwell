import { StyleSheet } from 'react-native';

import { useState } from 'react';
import ImageInput from './app/components/ImageInput';
import Screen from './app/components/Screen';

export default function App() {
    const [imageUri, setImageUri] = useState();

    return (
        <Screen>
            <ImageInput
                image={imageUri}
                onChangeImage={(uri) => setImageUri(uri)}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({});
