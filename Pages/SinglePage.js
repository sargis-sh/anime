
import { StyleSheet, Text, View, ScrollView, Image, Linking, TouchableOpacity, Button, TouchableHighlight } from 'react-native';


import React, {useState} from "react";
import { Dimensions } from 'react-native';

import { WebView } from 'react-native-webview';
var rows = [];

const SinglePage = ({ route, navigation }) => {
    const { animeNameValue, animeImageValue, animeDescriptionValue, animeRatingValue, animeCountValue } = route.params;
  return (
    <View style={styles.SingleView}>
      <ScrollView>
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={{uri : animeImageValue.animeImage}}/>
            </View>
         
            <View style={styles.details}>
          
                <Text style={styles.title}>{animeNameValue.animeName}</Text>
                <TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.netflix.com/am/title/80001305');
        }}>
        <Text style={styles.button}>Watch</Text>
      </TouchableOpacity>
              
                    <Text style={styles.rating}>{animeRatingValue.animeRating}</Text>
                    <Text style={styles.count}>Episode Count: {animeCountValue.animeCount}</Text>
                <Text style={styles.description}>{animeDescriptionValue.animeDescription}</Text>
                <Text   onPress={() => {
          Linking.openURL('https://www.youtube.com/watch?v=ULCIHP5dc44');
        }} style={styles.title}>Movie Trailer</Text>
            <View style={styles.imageView}>
                <Image onPress={() => {
          Linking.openURL('https://www.youtube.com/watch?v=ULCIHP5dc44');
        }} style={styles.trailer}  source={require('../assets/cowboy.jpeg')}/>
            </View>

            <Text  style={styles.title}>Memes</Text>
            <View style={styles.imageView}>
                <Image style={styles.trailer}  source={require('../assets/meme.jpg')}/>
            </View>
            {/* <Text  style={styles.title}>Popular AMV</Text>
            <WebView
        style={{ marginTop: 20, width: 320, height: 230 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: "https://www.youtube.com/watch?v=05OkppvHUvM" }}
      /> */}
            </View>
        </View>
      </ScrollView>
    </View>
  );

};

const styles = StyleSheet.create({
    imageView: {
        margin: 15,
       
    },
    trailer:{
      width: 350,
      height: 320,
   
      position: "relative",
    },
    button:{
      fontSize: 20,
      color: 'white',
      width: 120,
      height:50,
      margin: 15,
      marginTop: 8,
      borderRadius: 10,
      backgroundColor: '#3b99d9',
      padding: 8,
     
    },
    details: {
        margin: 30,
        maxWidth: 400,
    },
    description: {
        margin: 15,
        color: '#FFFAF0',
        alignSelf: "stretch"
    },
    rating: {
        margin: 15,
        color: '#FFFAF0',
        alignSelf: "stretch"
    },
    count: {
        margin: 15,
        color: '#FFFAF0',
        alignSelf: "stretch"
    },
    image: {
        borderWidth: 4,
        borderColor: "#FFFAF0",
        width: 350,
        height: 420,
        borderRadius: 8,
        position: "relative",
    },
    title:{
        margin: 15,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFFAF0'
      },
    SingleView: {
      alignSelf: 'stretch',
      flex: 1,
      backgroundColor: "#282c34",
    },
    container: {
      width: "100%",
      alignItems:'center',
      justifyContent:'center',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
});

export default SinglePage;