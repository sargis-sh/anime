import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


// import './Post.css';
import './Helper.js';
import json from '../../Helpers/Helper.js';
// import Skeleton from '@mui/material/Skeleton';
// import Stack from '@mui/material/Stack';

function Post(num) {
    const [isLoading, SetIsLoading] = useState(true);
    const [animeName, setAnimeName] = useState();
    const [animeImage, setAnimeImage] = useState();
    const [animeCount, setAnimeCount] = useState();
    const [animeRating, setAnimeRating] = useState();
    const [animeJapTitle, setAnimeJapTitle] = useState();
    // const [animeImage, setAnimeImage] = useState();
    useEffect(() => {
        try{
        const getData = async () => {
            let postHREF = await json.get('/anime');
            let postResult = postHREF.data.data[num.num].attributes;
            // console.log(postResult);
            setAnimeImage(postResult.posterImage.large);
            setAnimeName(postResult.canonicalTitle);
            setAnimeCount(postResult.episodeCount);
            setAnimeRating(postResult.ageRatingGuide);
            setAnimeJapTitle(postResult.titles.ja_jp);
        //     setPostTitle(postResult);
        //     setPostAuthor(postResult[num.num].title);
        //     setPostBody(postResult[num.num].body);
        }
        getData();
        }
        catch(error){
            return <Text>{error}</Text>;
        }
        finally{
            SetIsLoading(false);
        }
    }, []);
    if(isLoading){
        return(
            // <Stack spacing={1} className="Post">
            //     <Skeleton variant="text" />
            //     <Skeleton variant="text" />
            //     <Skeleton variant="text" />
            // </Stack>
            <Text>Loading...</Text>
        );
    }
    else{
        var divStyle = {
            backgroundImage: 'url(' + animeImage + ')',
          };
    return (  
    <View className="Post">
        
        <View style={styles.MovieCard} id="bright">
  <View style={styles.InfoSection}>
    <View style={styles.MovieHeader}>
      <Image style={styles.AnimeImage} source={{uri : animeImage}}/>
      <Text style={styles.Header1}>{animeName}</Text>
      <Text style={styles.Header4}>{animeJapTitle}</Text>
    </View>
    <View>
        <Text style={styles.Minutes}>Episode Count: {animeCount}</Text>
    </View>
    <View>
        <Text style={styles.Type}>{animeRating}</Text>
    </View>
  </View>
  <View style={styles.BlurBack} className="blur_back bright_back">

  </View>
</View>
    </View>
    );
    }
    
}

console.log("osjndjwhhs ");

const styles = StyleSheet.create({
  AnimeImage: {
    width: 100,
    borderRadius: 8,
    position: "relative",
    height: 150,
  },
  MovieCard: {
    backgroundColor: "#000",
    flexDirection:'row',
    justifyContent: "center",
    alignItems: "center",
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
//   Description: {
//     padding: 25,
//     height: "50%",
//   },
  BlurBack: {
    width: "80%",
    position: "absolute",
    zIndex: 1,
    height: "100%",
    backgroundSize: "cover",
    borderRadius: 8
  }
});

export default Post;