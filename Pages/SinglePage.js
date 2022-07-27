import Post from '../Components/Post/Post';
import { StyleSheet, Text, View, ScrollView, Image, Button, TouchableHighlight } from 'react-native';
import List from '../Components/Post/List'
import SignIn from './SignIn';
import SignupForm from "./SignUp";
import React, {useState} from "react";
import { Dimensions } from 'react-native';
var rows = [];

const SinglePage = ({ route, navigation }) => {
    const { animeNameValue, animeImageValue, animeDescriptionValue, animeRatingValue, animeCountValue } = route.params;
    console.log(animeNameValue.animeName)
  return (
    <View style={styles.SingleView}>
      <ScrollView>
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={{uri : animeImageValue.animeImage}}/>
            </View>
            <View style={styles.details}>
                <Text style={styles.title}>{animeNameValue.animeName}</Text>
                    <Text style={styles.rating}>{animeRatingValue.animeRating}</Text>
                    <Text style={styles.count}>Episode Count: {animeCountValue.animeCount}</Text>
                <Text style={styles.description}>{animeDescriptionValue.animeDescription}</Text>
            </View>
        </View>
      </ScrollView>
    </View>
  );

};

const styles = StyleSheet.create({
    imageView: {
        margin: 30,
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
        width: 400,
        height: 600,
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