import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
    const scrollView = useRef();
    return (
        <ScrollView
            ref={scrollView}
            horizontal
            onContentSizeChange={() => scrollView.current.scrollToEnd()}
        >
            <View style={styles.container}>
                {imageUris.map((uri) => (
                    <View key={uri} style={styles.image}>
                        <ImageInput
                            image={uri}
                            onChangeImage={() => onRemoveImage(uri)}
                        />
                    </View>
                ))}
                <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
    },
    image: {
        marginRight: 10,
    },
});

export default ImageInputList;
