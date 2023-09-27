import { Dimensions, StyleSheet, Text, View } from 'react-native';
import * as Yup from 'yup';

import AppForm from '../components/form/AppForm';
import AppFormField from '../components/form/AppFormField';
import SubmitButton from '../components/form/SubmitButton';

import { useState } from 'react';
import { ImageBackground } from 'react-native';
import Screen from './Screen';

import listingAPI from '../api/listings';

import CategoryPickerItem from '../components/CategoryPickerItem';
import AppFormPicker from '../components/form/AppFormPicker';
import FormImagePicker from '../components/form/FormImagePicker';
import colors from '../config/colors';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),

    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
    images: Yup.array().min(1, 'Please select at least one image.'),
});

const categories = [
    {
        backgroundColor: '#fc5c65',
        icon: 'clock',
        label: 'Productivity',
        value: 1,
    },
    {
        backgroundColor: '#fd9644',
        icon: 'account-outline',
        label: 'Biography',
        value: 2,
    },
    {
        backgroundColor: '#fed330',
        icon: 'history',
        label: 'History',
        value: 3,
    },
    {
        backgroundColor: '#26de81',
        icon: 'dna',
        label: 'Tech',
        value: 4,
    },
    {
        backgroundColor: '#2bcbba',
        icon: 'school',
        label: 'Academic',
        value: 5,
    },
    {
        backgroundColor: '#45aaf2',
        icon: 'brain',
        label: 'Neuroscience',
        value: 6,
    },
    {
        backgroundColor: '#4b7bec',
        icon: 'pencil',
        label: 'Art & Design',
        value: 7,
    },
    {
        backgroundColor: '#a55eea',
        icon: 'book-open-variant',
        label: 'Fiction',
        value: 8,
    },
    {
        backgroundColor: '#778ca3',
        icon: 'office-building',
        label: 'Career',
        value: 9,
    },
];

function ListingProductScreen(props) {
    const [category, setCategory] = useState();

    const handleSubmit = async (listing) => {
        console.log(listing);
        const result = await listingAPI.addListing(listing);
        if (!result.ok) return alert('Could not upload the book.');
        alert('Successfully uploaded book.');
    };

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
                        price: '',
                        description: '',
                        category: null,
                        images: [],
                    }}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
                >
                    <FormImagePicker name="images" />
                    <AppFormField
                        maxLength={255}
                        name="title"
                        placeholder="Title"
                    />
                    <AppFormField
                        keyboardType="numeric"
                        maxLength={8}
                        name="price"
                        placeholder="Price"
                        width={120}
                    />
                    <AppFormPicker
                        items={categories}
                        name="category"
                        numberOfColumns={3}
                        PickerItemComponent={CategoryPickerItem}
                        placeholder="Category"
                        width="50%"
                    />

                    <AppFormField
                        maxLength={255}
                        multiline
                        name="description"
                        numberOfLines={3}
                        placeholder="Description"
                    />
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
