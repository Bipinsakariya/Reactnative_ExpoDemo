import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import WelcomeScreen from './screens/Welcome';
import SplashScreen from './screens/Splash';

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'SplashScreen'} headerMode='none'>
                <Stack.Screen name='SplashScreen' component={SplashScreen}/>  
                <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
                <Stack.Screen name='LoginScreen' component={LoginScreen}/>
                <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;