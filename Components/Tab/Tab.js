import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Tab = createMaterialBottomTabNavigator();
import Home from '../../Pages/Home';
import Profile from '../../Pages/Profile';
import Discover from '../../Pages/Discover';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export default function MyTabs() {
  return (
    <Tab.Navigator 
      initialRouteName="Home"
      activeColor="rgba(0, 0, 0, 0.8)"
      inactiveColor="rgba(0, 0, 0, 0.3)"
      labelStyle={{ fontSize: 77 }}
      // style={styles.Tabs}
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