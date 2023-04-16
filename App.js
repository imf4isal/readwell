import { StyleSheet } from 'react-native';
import MessageScreen from './app/screen/MessageScreen';

export default function App() {
    return <MessageScreen />;
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 5,
    },
});
