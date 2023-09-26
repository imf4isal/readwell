import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../config/colors';
import ProfileNavigator from '../navigation/ProfileNavigator';
import ListingProductScreen from '../screens/ListingProductScreen';
import ProductsScreen from '../screens/ProductsScreen';
import AddItemNavigation from './AddItemNavigation';

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                headerShown: false,
                tabBarLabel: () => null,
            }}
        >
            <Tab.Screen
                name="Feed"
                component={ProductsScreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'home' : 'home-outline'}
                            size={size}
                            color={focused ? colors.primary : colors.grey}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Add"
                component={ListingProductScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <AddItemNavigation
                            color={focused ? colors.primary : colors.secondary}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Account"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'account' : 'account-outline'}
                            size={size}
                            color={focused ? colors.primary : colors.grey}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default AppNavigator;
