import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../config/colors';
import ListingProductScreen from '../screens/ListingProductScreen';
import MessageScreen from '../screens/MessageScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddItemNavigation from './AddItemNavigation';

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Feed"
                component={ProductsScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'home' : 'home-outline'}
                            size={size}
                            color={focused ? colors.primary : colors.grey}
                        />
                    ),
                    tabBarLabel: () => {
                        null;
                    },
                }}
            />
            <Tab.Screen
                name="Add"
                component={ListingProductScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <AddItemNavigation
                            size={size}
                            color={focused ? colors.primary : colors.grey}
                            borderColor={
                                focused ? colors.primary : colors.secondary
                            }
                        />
                    ),
                    tabBarLabel: () => {
                        null;
                    },
                }}
            />
            <Tab.Screen
                name="Message"
                component={MessageScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'message' : 'message-outline'}
                            size={size}
                            color={focused ? colors.primary : colors.grey}
                        />
                    ),
                    tabBarLabel: () => {
                        null;
                    },
                    tabBarBadge: '3',
                    tabBarBadgeStyle: {
                        backgroundColor: colors.primary,
                        color: colors.white,
                        fontSize: 10,
                    },
                }}
            />
            <Tab.Screen
                name="Account"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'face-man' : 'face-man-outline'}
                            size={size}
                            color={focused ? colors.primary : colors.grey}
                        />
                    ),
                    tabBarLabel: () => {
                        null;
                    },
                }}
            />
        </Tab.Navigator>
    );
}

export default AppNavigator;
