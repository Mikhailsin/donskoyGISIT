import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

// Import your screens
import MenuScreen from './screens/MenuScreen';
import CartScreen from './screens/CartScreen';
import OpenScreenOne from './screens/OpenScreenOne';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconSource;

                        if (route.name === 'Главная') {
                            iconSource = require('../assets/icons/home.png');
                        } else if (route.name === 'Корзина') {
                            iconSource = require('../assets/icons/cart.png');
                        } else if (route.name === 'Открыть 1') {
                            iconSource = require('../assets/icons/open.png');
                        } else if (route.name === 'Профиль') {
                            iconSource = require('../assets/icons/profile.png');
                        }

                        return (
                            <Image
                                source={iconSource}
                                style={{
                                    width: size,
                                    height: size,
                                    tintColor: color,
                                }}
                            />
                        );
                    },
                    tabBarActiveTintColor: '#007AFF',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                        backgroundColor: '#fff',
                        borderTopWidth: 1,
                        borderTopColor: '#f2f3f4',
                        height: 80,
                        paddingBottom: 10,
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        marginTop: 5,
                        fontFamily: 'Jua-Regular', // Using your custom font
                    },
                    headerShown: false, // Hide default header if you want custom headers in each screen
                })}
            >
                <Tab.Screen name="Главная" component={MenuScreen} />
                <Tab.Screen name="Корзина" component={CartScreen} />
                <Tab.Screen name="Открыть 1" component={OpenScreenOne} />
                <Tab.Screen name="Профиль" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;