import { StyleSheet, TextInput, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import colors from '../config/colors';

function SearchBox({ search }) {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (val) => {
        search(val);
    };

    return (
        <View style={styles.container}>
            {/* <Text>{searchValue}</Text> */}
            <TextInput
                onChangeText={(val) => {
                    setSearchValue(val);
                    handleSearch(val);
                }}
                placeholder="search book"
                style={styles.input}
                value={searchValue}
            />
            <MaterialIcons
                name="search"
                size={25}
                color="grey"
                style={styles.icon}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.white,
        borderColor: 'grey',
        borderRadius: 50,
        borderWidth: 1,
        elevation: 10,
        flexDirection: 'row',
        margin: 10,
        padding: 5,
        paddingLeft: 15,
    },
    icon: {
        position: 'absolute',
        right: 15,
    },
    input: {
        color: 'grey',
        fontSize: 18,
        width: '85%',
    },
});

export default SearchBox;
