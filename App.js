
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import MyTabs from './Components/Tab/Tab';
import UpperTab from './Components/Tab/UpperTab';

import Header from './Components/Header/Header';
import  React, { Component, useEffect, useState }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from "./Pages/SignIn";
import SignUp from './Pages/SignUp';

function App(pState){
  // if(pState.exp.errorRecovery==null){
  //   pState="Home";
  // }
  // console.log(pState);
  // setState(pState)
  useEffect(()=>{
    console.log("jkbwdhkw")
  }, [pState])
  console.log(pState)
  pState = "Home";
  
  if(pState=="SignIn"){
    return (
          <NavigationContainer className = "Container">
            <Text>{pState}</Text>
            <Header/>
            <SignIn />
          </NavigationContainer>
    )
  }
  else if(pState=="SignIn"){
    return (
          <NavigationContainer className = "Container">
            <Text>{pState}</Text>
            <Header/>
            <SignUp />
          </NavigationContainer>
    )
  }
  else{
    return (
          <NavigationContainer className = "Container">
            <Text>{pState}</Text>
            <Header/>
            <MyTabs />
          </NavigationContainer>
    )
  } 
}

export default App;