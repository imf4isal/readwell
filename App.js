import { ScrollView, StyleSheet } from 'react-native';
import AltCard from './app/components/AltCard';

export default function App() {
    return (
        <ScrollView style={styles.container}>
            <AltCard
                title="The Subtle Art of Not Giving a Fuck"
                subtitle="BDT 200"
                image={require('./app/assets/products/organizedbook.jpg')}
            />
            <AltCard
                title="The Subtle Art of Not Giving a Fuck"
                subtitle="BDT 200"
                image={require('./app/assets/products/organizedbook.jpg')}
            />
            <AltCard
                title="The Subtle Art of Not Giving a Fuck"
                subtitle="BDT 200"
                image={require('./app/assets/products/organizedbook.jpg')}
            />
            <AltCard
                title="The Subtle Art of Not Giving a Fuck"
                subtitle="BDT 200"
                image={require('./app/assets/products/organizedbook.jpg')}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 5,
    },
});
