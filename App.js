import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MyTabs from './Components/Tab/Tab';
import Header from './Components/Header/Header';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from "./Pages/SignIn";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.View}>
      <SafeAreaView style={styles.SafeArea}>
        
        <Header style={styles.SafeArea}></Header>
      </SafeAreaView>
      
      <NavigationContainer style={styles.App}><Stack.Navigator>
      <Stack.Screen name="Login" component={LoginForm} />
      </Stack.Navigator>

      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    backgroundColor: "#000",
    height: "100%",
    width: "100%"
  },
  SafeArea: {
    width: "100%",
    backgroundColor: "rgb(0, 122, 255)",
  },
  App: {
    flex: 0.9,
  },
  Header: {
    color: "#000",
    fontWeight: "900",
    fontSize: 20,
  },
});