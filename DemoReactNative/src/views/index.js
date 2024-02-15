import React from "react";
import {
    Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import 'react-native-gesture-handler';

import Login from "./login";
import Home from "./home";
import Settings from "./settings";
import Product from "./product";
import Profile from "./profile";
import PictureList from '../views/picture-list';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: () => 
                <Image source={require('../images/home.png')} style={{width: 25, height: 25}} resizeMode="stretch" />
        }} />
        <Tab.Screen name="Settings" component={Settings} options={{
            tabBarIcon: () => 
                <Image source={require('../images/settings.png')} style={{width: 25, height: 25}} resizeMode="stretch" />
        }} />
        <Tab.Screen name="Product" component={Product} options={{
            tabBarIcon: () => 
                <Image source={require('../images/product.png')} style={{width: 25, height: 25}} resizeMode="stretch" />
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
            tabBarIcon: () => 
                <Image source={require('../images/user.png')} style={{width: 25, height: 25}} resizeMode="stretch" />
        }} />
      </Tab.Navigator>
    );
  }

// const HomeDrawer = () => {
//     return (
//         <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
//             <Drawer.Screen name="Home" component={Home} />
//         </Drawer.Navigator>
//     )
// }

export default function RootComponent() {
    return(
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="HomeTabs" component={MyTabs} />
                    <Stack.Screen name="PictureList" component={PictureList} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}