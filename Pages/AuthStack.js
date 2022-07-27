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

const AuthStack = ({navigation}) => {
    return (
        <View style={styles.Home}>
                <Header/> 
                <Stack.Navigator initialRoutName="SignIn">
                    <Stack.Screen name="Sign In or Sign Up to Continue" component={Auth} />
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUp} />
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