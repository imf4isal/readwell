import { useFormikContext } from 'formik';
import React from 'react';
import { StyleSheet } from 'react-native';
import ImageInputList from '../ImageInputList';

function FormImagePicker({ name }) {
    const { setFieldValue, errors, touched, values } = useFormikContext();

    const handleAdd = (image) => {
        setFieldValue(name, [...values[name], image]);
    };

    const handleRemove = (uri) => {
        setFieldValue(
            name,
            values[name].filter((image) => image !== uri)
        );
    };
    return (
        <ImageInputList
            imageUris={values[name]}
            onAddImage={handleAdd}
            onRemoveImage={handleRemove}
        />
    );
}

const styles = StyleSheet.create({
    container: {},
});

export default FormImagePicker;
