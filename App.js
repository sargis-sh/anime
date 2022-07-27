
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableHighlight } from 'react-native';
import MyTabs from './Components/Tab/Tab';
import UpperTab from './Components/Tab/UpperTab';


import Header from './Components/Header/Header';
import  React, { Component, useEffect, useState }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from "./Pages/SignIn";
import SignUp from './Pages/SignUp';

function App(){
  const[pageState, setPageState] = useState();
  const handleClickSignUp = () =>{
    setPageState("SignUp");
  }
  const handleClickSignIn = () =>{
    setPageState("SignIn");
  }
    console.log(pageState);
    if(pageState=="SignIn"){
      return (
            <NavigationContainer className = "Container">
              <View style={styles.Header}>
        <View style={styles.ButtonContainer}>
          <Text style={styles.Title}>📙AnimeLibrary</Text>
        </View>
        <View style={styles.ButtonContainer}>
          <TouchableHighlight style={styles.Button} onPress={handleClickSignUp}>
            <Text style={styles.ButtonText}>Sign Up</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.Button} onPress={handleClickSignIn}>
            <Text style={styles.ButtonText}>Sign In</Text>
          </TouchableHighlight>
        </View>
      </View>
              <SignIn />
            </NavigationContainer>
      )
    }
    else if(pageState=="SignUp"){
      return (
            <NavigationContainer className = "Container">
              <View style={styles.Header}>
        <View style={styles.ButtonContainer}>
          <Text style={styles.Title}>📙AnimeLibrary</Text>
        </View>
        <View style={styles.ButtonContainer}>
          <TouchableHighlight style={styles.Button} onPress={handleClickSignUp}>
            <Text style={styles.ButtonText}>Sign Up</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.Button} onPress={handleClickSignIn}>
            <Text style={styles.ButtonText}>Sign In</Text>
          </TouchableHighlight>
        </View>
      </View>
              <SignUp />
            </NavigationContainer>
      )
    }else{
      return (
        <NavigationContainer className = "Container">
          <View style={styles.Header}>
    <View style={styles.ButtonContainer}>
      <Text style={styles.Title}>📙AnimeLibrary</Text>
    </View>
    <View style={styles.ButtonContainer}>
      <TouchableHighlight style={styles.Button} onPress={handleClickSignUp}>
        <Text style={styles.ButtonText}>Sign Up</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.Button} onPress={handleClickSignIn}>
        <Text style={styles.ButtonText}>Sign In</Text>
      </TouchableHighlight>
    </View>
  </View>
          <MyTabs />
        </NavigationContainer>
  )
    }
    

} 


const styles = StyleSheet.create({  
  Header: {
    // padding: 20,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "auto",
    backgroundColor: "#0d0c39",
    justifyContent: "space-around",
    alignItems: "center",
  },
  ButtonContainer: {
    margin: 20,
    flexDirection: "row",
    // height: 100,
    alignItems: "center",
  },
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
    alignItems: "center"
  },
  Title: {
    fontSize: 40,
    color: "whitesmoke",
    textAlign: "left"
  }
})  

export default App;