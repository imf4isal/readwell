import { useState } from 'react';
import ImageInput from './app/components/ImageInput';
import Screen from './app/screens/Screen';

export default function App() {
    const [image, setImage] = useState();

    return (
        <Screen>
            <ImageInput
                image={image}
                onChangeImage={(imageUri) => setImage(imageUri)}
            />
        </Screen>
    );
}
