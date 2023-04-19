import { StyleSheet } from 'react-native';

import Screen from './app/components/Screen';
import LoginScreen from './app/screen/LoginScreen';

export default function App() {
    return (
        <Screen>
            <LoginScreen />
        </Screen>
    );
}

const styles = StyleSheet.create({});
