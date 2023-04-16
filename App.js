import { StyleSheet, View } from 'react-native';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';

export default function App() {
    return (
        <View style={styles.container}>
            <ListItem
                IconComponent={<Icon name="logout" />}
                // image={require('./app/assets/people.jpg')}
                title="Log out"
            />
            <ListItem
                image={require('./app/assets/people.jpg')}
                title="Faisal"
                subTitle="Here is the text"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        padding: 5,
    },
});
