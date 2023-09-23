import { useState } from 'react';
import ImageInputList from './app/components/ImageInputList';
import Screen from './app/screens/Screen';

export default function App() {
    const [images, setImages] = useState([]);

    const handleAdd = (image) => {
        setImages([...images, image]);
    };

    const handleRemove = (uri) => {
        setImages(images.filter((image) => image !== uri));
    };
    return (
        <Screen>
            <ImageInputList
                imageUris={images}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
        </Screen>
    );
}
