import Post from '../Components/Post/Post';
import { StyleSheet, Text, View, ScrollView, Button, TouchableHighlight } from 'react-native';
import List from '../Components/Post/List'
import SignIn from './SignIn';
import SignupForm from "./SignUp";
import React, {useState} from "react";

var rows = [];

const Home = () => {
//   var count = prompt("Enter the post count!")
  for (let index = 0; index < 10; index++) {
    rows.push(<Post searchText="true" num={index} key={index}/>);
  }
  return (
    <View style={styles.Home}>
      <ScrollView>
        <View style={styles.View}>
          {rows}
        </View> 
      </ScrollView>
    </View>
  );

};

const styles = StyleSheet.create({
    Home: {
      flex: 1,
      backgroundColor: "#282c34",
    },
    View: {
      width: "100%",
      alignItems:'center',
      justifyContent:'center',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    tytle:{
      margin:20,
      textAlign: 'center',
      fontWeight: 'bold',
      fontFamily: 'Roboto',
      fontSize: 40,
      color: '#FFFAF0'
    }
});

export default Home;