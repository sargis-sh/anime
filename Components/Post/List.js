// List.js
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  ScrollView
} from "react-native";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, image, epCount, ageRating, japTitle }) => (
        <View style={styles.MovieCard} id="bright">
        <View style={styles.InfoSection}>
            <View style={styles.MovieHeader}>
                <Image style={styles.AnimeImage} source={{uri : image}}/>
                <Text style={styles.Header1}>{name}</Text>
                <Text style={styles.Header4}>{japTitle}</Text>
            </View>
            <View>
                <Text style={styles.Minutes}>Episode Count: {epCount}</Text>
            </View>
            <View>
                <Text style={styles.Type}>{ageRating}</Text>
            </View>
        </View>
        <View style={styles.BlurBack} className="blur_back bright_back">

        </View>
        </View>
);

// the filter
const List = ({ searchPhrase, data }) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    // if (searchPhrase == true) {
    //   return <Item name={item.attributes.canonicalTitle} image={item.attributes.posterImage.large} epCount={item.attributes.episodeCount} ageRating={item.attributes.ageRatingGuide} japTitle={item.attributes.titles.ja_jp} style={styles.Container}/>;
    // }
    // filter of the name
    if (searchPhrase != "" && item.attributes.canonicalTitle.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.attributes.canonicalTitle} image={item.attributes.posterImage.large} epCount={item.attributes.episodeCount} ageRating={item.attributes.ageRatingGuide} japTitle={item.attributes.titles.ja_jp} style={styles.Container}/>;
    }
  };

  return (
      <View style={styles.View}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
  );
};

export default List;

const styles = StyleSheet.create({
    AnimeImage: {
        width: 100,
        borderRadius: 8,
        position: "relative",
        height: 150,
    },
    MovieCard: {
        backgroundColor: "#000",
        position: "relative",
        width: 275,
        height: 350,
        margin: 24,
        overflow: "hidden",
        borderRadius: 20,
        transition: "all 0.4s"
    },
    InfoSection: {
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundBlendMode: "multiply",
        zIndex: 2,
        borderRadius: 8
    },
    MovieHeader: {
        width: "70%",
        position: "relative",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    Header1: {
        color: "#fff",
        fontWeight: "900",
        fontSize: 16,
        marginTop: 16,
        marginBottom: 8
    },
    Header4: {
        color: "#9ac7fa",
        fontWeight: "400",
        marginTop: 0
    },
    Minutes: {
        marginTop: 10,
        color: "#fff",
        padding: 5,
        textShadowColor:'#585858',
        textShadowRadius:5,
    },
    Type: {
        color: "#cee4fd",
        marginLeft: 10
    },
    BlurBack: {
        width: "80%",
        position: "absolute",
        zIndex: 1,
        height: "100%",
        backgroundSize: "cover",
        borderRadius: 8
    },
});