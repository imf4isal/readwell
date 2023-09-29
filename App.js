import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import AuthContext from './app/auth/context';
import OfflineNotice from './app/components/OfflineNotice';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';

export default function App() {
    const [user, setUser] = useState();

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <OfflineNotice />
            <NavigationContainer>
                {user ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
        </AuthContext.Provider>
    );
}
