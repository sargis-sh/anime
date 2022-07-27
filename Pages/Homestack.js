import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './Home';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableHighlight } from "react-native";
import {  Button, StyleSheet, View, Text } from "react-native";
import SinglePage from './SinglePage';
import Header from '../Components/Header/Header';
const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
    return (
        <View style={styles.Home}>
                <Header/> 
                <Stack.Navigator initialRoutName="SinglePage">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="SinglePage" component={SinglePage} />
                </Stack.Navigator>
        </View>
    
    )
}

const styles = StyleSheet.create({
    Home: {
      flex: 1,
      backgroundColor: "#282c34",
    }})
export default HomeStack;