import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import OfflineNotice from './app/components/OfflineNotice';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';

export default function App() {
    const [user, setUser] = useState();

    const restoreUser = async () => {
        const user = await authStorage.getUser();
        if (!user) setUser(user);
    };

    useEffect(() => {
        restoreUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <OfflineNotice />
            <NavigationContainer>
                {user ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
        </AuthContext.Provider>
    );
}
