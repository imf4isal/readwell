import { NavigationContainer } from '@react-navigation/native';
import ProfileNavigator from './app/navigation/ProfileNavigator';

export default function App() {
    return (
        <NavigationContainer>
            <ProfileNavigator />
        </NavigationContainer>
    );
}
