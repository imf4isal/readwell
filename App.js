import { StyleSheet } from 'react-native';
import AltCard from './app/components/AltCard';

export default function App() {
    return (
        <AltCard
            title="Book"
            subtitle="BDT 200"
            image={require('./app/assets/products/organizedbook.jpg')}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 50,
    },
});
