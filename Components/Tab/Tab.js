import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Tab = createMaterialBottomTabNavigator();
import Home from '../../Pages/Home';
import Auth from '../../Pages/Auth';
import Discover from '../../Pages/Discover';
import MyList from '../../Pages/MyList';
import { Dimensions } from 'react-native';
import SignupForm from '../../Pages/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../../Pages/SignIn';
import SignUp from '../../Pages/SignUp';
import { TouchableHighlight } from "react-native";
import {  Button, StyleSheet, View, Text } from "react-native";
import HomeStack from '../../Pages/Homestack';
import AuthStack from '../../Pages/AuthStack';

export default function MyTabs() {
  return (

    <Tab.Navigator independent={true}
      initialRouteName="HomeStack"
      activeColor="rgba(255, 255, 255, 0.9)"
      barStyle={{ backgroundColor: '#0d0c39' }}
      labelStyle={{ fontSize: 77 }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="MyList"
        component={MyList}
        options={{
          tabBarLabel: 'My List',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="AuthStack"
        component={AuthStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="SignIn"
        component={SignIn}
        options={{
          tabBarVisible: false
       }}
      />
      <Tab.Screen
        name="SignUp"
        component={SignUp}
      /> */}
    </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  ButtonText:{
    fontSize: 17,
    color: "#272727",
  },
  Button: {
    marginRight: 28.3,
    marginLeft: 28.3,
    height: 40,
    width:100,
    borderRadius: 6,
    padding: 10,
    backgroundColor: "#F58216",
    justifyContent: "center",
    alignItems: "center",

    bottom: 20
  },

  View: {
    height: "100%"
  },
  Tabs: {
    width: "100%",
    backgroundColor: "#282c34"
  }});
