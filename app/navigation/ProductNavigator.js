import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ProductsScreen from '../screens/ProductsScreen';

const Stack = createStackNavigator();

function ProductNavigator(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Books" component={ProductsScreen} />
            <Stack.Screen
                name="BookDetails"
                component={ProductDetailsScreen}
                options={{
                    presentation: 'modal',
                    gestureEnabled: true,
                    gestureResponseDistance: 300,
                }}
            />
        </Stack.Navigator>
    );
}

export default ProductNavigator;
