import React from 'react';

import MessageScreen from '../screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function ProfileNavigator(props) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen
                name="Message"
                component={MessageScreen}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: 'transparent',
                    },
                }}
            />
        </Stack.Navigator>
    );
}

export default ProfileNavigator;
