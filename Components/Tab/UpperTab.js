import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../../Pages/Home';
import Profile from '../../Pages/Profile';
import Discover from '../../Pages/Discover';
import MyList from '../../Pages/MyList';
import { Dimensions } from 'react-native';
import SignupForm from '../../Pages/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from '../../Pages/SignIn';
const Stack = createStackNavigator();
import { TouchableHighlight } from "react-native";
import {  Button, StyleSheet, View, Text } from "react-native";
const UpperTabs = createMaterialBottomTabNavigator();
export default function UpperTab() {
  return (
    <UpperTabs.Navigator independent={true}
      initialRouteName="Home"
      activeColor="rgba(255, 255, 255, 0.9)"
      barStyle={{ backgroundColor: '#0d0c39' }}
      labelStyle={{ fontSize: 77 }}
    >
      <UpperTabs.Screen
        name="Log"
        component={LoginForm}
        options={{
          tabBarLabel: 'Log',
          tabBarIcon: ({ color }) => (
            <TouchableHighlight style={styles.Button}>
          <Text style={styles.ButtonText}>Sign Up</Text>
        </TouchableHighlight> 
          ),
        }}
      />
    </UpperTabs.Navigator>

  );
}

const styles = StyleSheet.create({
  View: {
    height: "100%"
  },
  Tabs: {
    width: "100%",
    backgroundColor: "#282c34"
  }});