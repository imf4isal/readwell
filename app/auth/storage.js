import * as SecureStore from 'expo-secure-store';

const key = 'authToken';
const storeToken = async (authToken) => {
    try {
        await SecureStore.setItemAsync(authToken);
    } catch (error) {
        console.log('error store the authtoken', error);
    }
};

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (error) {
        console.log('error getting the authtoken.', error);
    }
};

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log('Error deleting authToken', error);
    }
};

export default { getToken, storeToken, removeToken };
