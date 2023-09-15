import { View } from 'react-native';
import Card from './app/components/Card';

export default function App() {
    return (
        <View
            style={{
                paddingTop: 100,
                // backgroundColor: '#ffd',
                flex: 1,
                paddingHorizontal: 10,
            }}
        >
            <Card
                title="Atomic Habit"
                subtitle="120 BDT"
                image={require('./app/assets/atomichabit.jpg')}
            />
        </View>
    );
}
