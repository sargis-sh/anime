import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Tab = createMaterialBottomTabNavigator();
import Home from '../../Pages/Home';
import Profile from '../../Pages/Profile';
import Discover from '../../Pages/Discover';
import MyList from '../../Pages/MyList';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import LoginForm from '../../Pages/SignIn';
import SignupForm from '../../Pages/SignUp';

export default function MyTabs() {
  return (
    <Tab.Navigator 
      initialRouteName="Home"
      activeColor="rgba(255, 255, 255, 0.9)"
      barStyle={{ backgroundColor: '#0d0c39' }}
      labelStyle={{ fontSize: 77 }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
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
          tabBarLabel: 'MyList',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
       {/* <Tab.Screen name="Login" component={LoginForm} />
       <Tab.Screen name="Signup" component={SignupForm} /> */}
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
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  Tabs: {
    width: "100%",
    backgroundColor: "#282c34"
  }});