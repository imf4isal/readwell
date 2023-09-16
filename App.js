import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/screens/Screen';

export default function App() {
    return (
        <Screen>
            <ListItem
                title="Faisal Bhai"
                subTitle="faisalBhai@gmail.com"
                image={require('./app/assets/people.jpg')}
            />
            <ListItem
                title="Faisal Bhai"
                subTitle="faisalBhai@gmail.com"
                IconComponent={<Icon name="message" />}
            />
        </Screen>
    );
}
