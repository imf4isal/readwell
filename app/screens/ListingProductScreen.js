import { Dimensions, StyleSheet, Text, View } from 'react-native';

import AppForm from '../components/form/AppForm';
import AppFormField from '../components/form/AppFormField';
import SubmitButton from '../components/form/SubmitButton';

import { useState } from 'react';
import { ImageBackground } from 'react-native';
import * as Yup from 'yup';
import Screen from './Screen';

import AppPicker from '../components/AppPicker';
import FormImagePicker from '../components/form/FormImagePicker';
import colors from '../config/colors';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    writer: Yup.string().required().min(1).label('Writer'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    images: Yup.array().min(1, 'Please add at least 1 image.'),
});

const genres = [
    {
        id: 1,
        title: 'Business',
    },
    {
        id: 2,
        title: 'Productivity',
    },
    {
        id: 3,
        title: 'History',
    },
    {
        id: 4,
        title: 'Science',
    },
];

function ListingProductScreen(props) {
    const [category, setCategory] = useState();

    return (
        <ImageBackground
            source={require('../assets/signupback.png')}
            resizeMode="stretch"
            style={styles.container}
        >
            <Screen>
                <View style={styles.heading}>
                    <Text style={styles.header}>Add Book</Text>

                    <Text style={styles.subtitle}>
                        Give your books new home!
                    </Text>
                </View>
                <AppForm
                    initialValues={{
                        title: '',
                        writer: '',
                        price: '',
                        description: '',
                        images: [],
                    }}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
                >
                    <AppFormField name="title" placeholder="Title" />
                    <AppFormField name="writer" placeholder="Writer" />
                    <AppPicker
                        name="category"
                        items={genres}
                        placeholder="Category"
                        onSelect={(item) => setCategory(item)}
                        selectedItem={category}
                    />
                    <AppFormField
                        keyboardType="numeric"
                        maxLength={8}
                        name="price"
                        placeholder="Price"
                    />

                    <AppFormField
                        maxLength={255}
                        multiline
                        name="description"
                        numberOfLines={3}
                        placeholder="Description"
                    />
                    <FormImagePicker name="images" />
                    <SubmitButton
                        title="add book"
                        color="secondary"
                        hoverColor="secondaryC"
                    />
                </AppForm>
            </Screen>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        height: screenHeight,
        justifyContent: 'flex-start',
        padding: 15,
    },
    header: {
        fontSize: 48,
        fontWeight: 'bold',
        color: colors.dark,
        letterSpacing: 1,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        letterSpacing: 1,
    },
    heading: {
        marginBottom: 60,
        marginHorizontal: 10,
    },
});

export default ListingProductScreen;
