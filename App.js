import { ScrollView, StyleSheet } from 'react-native';
import AltCard from './app/components/AltCard';
import Card from './app/components/Card';
import CardAlt from './app/components/CardAlt';

export default function App() {
    return (
        <ScrollView style={styles.container}>
            {/* <CardAlt
                title="The Subtle Art of Not Giving a Fuck"
                subtitle="BDT 200"
                image={require('./app/assets/products/organizedbook.jpg')}
            /> */}
            {/* <CardAlt
                title="The Subtle Art of Not Giving a Fuck"
                subtitle="BDT 200"
                image={require('./app/assets/products/organizedbook.jpg')}
            />
            <Card
                title="The Subtle Art of Not Giving a Fuck"
                subtitle="BDT 200"
                image={require('./app/assets/products/organizedbook.jpg')}
            /> */}

            <CardAlt
                title="Atomic Habit"
                writer="James Clear"
                subtitle="BDT 200"
                image={require('./app/assets/products/atomicHabit.jpg')}
            />
            <Card
                title="Milk and Honey"
                writer="Rupi Kaur"
                subtitle="BDT 200"
                image={require('./app/assets/products/milkandhoney.jpg')}
            />
            <AltCard
                title="Zero to one"
                writer="Peter Theil"
                subtitle="BDT 200"
                image={require('./app/assets/products/book.jpg')}
            />
            {/* <Card
                title="Atomic Habit"
                writer="James Clear"
                subtitle="BDT 200"
                image={require('./app/assets/products/atomicHabit.jpg')}
            /> */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 5,
    },
});
