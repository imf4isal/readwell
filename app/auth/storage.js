import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

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

const getUser = async () => {
    const token = await getToken();

    if (token) return jwtDecode(token);

    return null;
};

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log('Error deleting authToken', error);
    }
};

export default { getUser, storeToken, removeToken };
