import { StyleSheet, Text, View, SafeAreaView, Button, TouchableHighlight } from 'react-native';
import MyTabs from './Components/Tab/Tab';
import UpperTab from './Components/Tab/UpperTab';

import Header from './Components/Header/Header';
import  React, { Component, useEffect, useState }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from "./Pages/SignIn";
import SignUp from './Pages/SignUp';
import { navigationRef } from './Components/Tab/RootNavigation';

function App(){
      return (
        <NavigationContainer ref={navigationRef}>
          <MyTabs/>
        </NavigationContainer>
  );
}

export default App;