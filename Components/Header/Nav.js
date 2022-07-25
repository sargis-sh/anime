import LoginForm from '../../Pages/SignIn';
import Home from '../../Pages/Home';
import MyTabs from '../Tab/Tab';
import { View, Text, StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator,  createStackNavigator, } from '@react-navigation/stack';
import SignupForm from '../../Pages/SignUp';
const AuthStack = createStackNavigator();
export const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Home" component={Home} />
    <AuthStack.Screen name="Signin" component={LoginForm} />
    <AuthStack.Screen name="Signup" component={SignupForm} />
   
  </AuthStack.Navigator>
);


const styles = StyleSheet.create({  
    Header: {
      padding: 100,
      height:300,
      width: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
      height: "auto",
      backgroundColor: "#0d0c39",
      justifyContent: "space-around",
      alignItems: "center",
    }});