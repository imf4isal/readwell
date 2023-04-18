import { StyleSheet } from 'react-native';

import ProductListScreen from './app/components/ProductListScreen';
import Screen from './app/components/Screen';

export default function App() {
    return (
        <Screen>
            <ProductListScreen />
        </Screen>
    );
}

const styles = StyleSheet.create({});
