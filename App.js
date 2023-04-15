import { StyleSheet, View } from 'react-native';
import ListItem from './app/components/ListItem';

export default function App() {
    return (
        <View style={styles.container}>
            <ListItem
                image={require('./app/assets/people.jpg')}
                title="Faisal"
                subTitle="faisalabdullah@gmail.com"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 5,
    },
});
