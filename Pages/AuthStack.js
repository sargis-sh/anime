import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './Home';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableHighlight } from "react-native";
import {  Button, StyleSheet, View, Text } from "react-native";

import Header from '../Components/Header/Header';
import Profile from './Profile';
import SignIn from './SignIn';
import Auth from './Auth';
import SignUp from './SignUp';
const Stack = createStackNavigator();
import * as RootNavigation from '../Components/Tab/RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthStack = () => {
    return (
        <View style={styles.Home}>
            
                <Header/> 
                <Stack.Navigator screenOptions={{
    headerShown: false
  }} initialRoutName="Sign In or Sign Up to Continue">
                    <Stack.Screen name="Auth" component={Auth} />
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="Profile" component={Profile} />
                </Stack.Navigator>
        </View>
    
    )
}

const styles = StyleSheet.create({
    Home: {
      flex: 1,
      backgroundColor: "#282c34",
    }})
export default AuthStack;