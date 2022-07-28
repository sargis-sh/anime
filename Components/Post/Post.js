import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import * as RootNavigation from '../Tab/RootNavigation';

// import './Post.css';
import './Helper.js';
import json from '../../Helpers/Helper.js';
// import Skeleton from '@mui/material/Skeleton';
// import Stack from '@mui/material/Stack';
function Post(num, searchText) {
    // searchText = "true";
    const [text, setText] = useState();
    const [isLoading, SetIsLoading] = useState(true);
    const [animeName, setAnimeName] = useState();
    const [animeImage, setAnimeImage] = useState();
    const [animeCount, setAnimeCount] = useState();
    const [animeRating, setAnimeRating] = useState();
    const [animeJapTitle, setAnimeJapTitle] = useState();
    const [animeDescription, setAnimeDescription] = useState();
    // const [animeImage, setAnimeImage] = useState();
    // setText(searchText);
    // console.log(searchText.searchText)
    
    useEffect(() => {
        try{
          
        const getData = async () => {
            let postHREF = await json.get('/anime');
            let postResult = postHREF.data.data[num.num].attributes;
            setAnimeImage(postResult.posterImage.large);
            setAnimeName(postResult.canonicalTitle);
            setAnimeCount(postResult.episodeCount);
            setAnimeRating(postResult.ageRatingGuide);
            setAnimeJapTitle(postResult.titles.ja_jp);
            setAnimeDescription(postResult.description);
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
          // if(animeName==searchText){
          //   return(
          //     <></>
          //   );
          // }else{
    return (  
    <View>
            
        <View style={styles.MovieCard} id="bright">
  <View style={styles.InfoSection}>
    <View style={styles.MovieHeader}>
      <Image style={styles.AnimeImage} source={{uri : animeImage}}/>
      <TouchableHighlight style={styles.Button} onPress={() => 
RootNavigation.navigate('SinglePage', { animeNameValue: {animeName}, animeImageValue: {animeImage}, animeDescriptionValue: {animeDescription}, animeJapTitleValue: {animeJapTitle}, animeRatingValue: {animeRating}, animeCountValue: {animeCount}})
}>
          <Text style={styles.Header1}>{animeName}</Text>
        </TouchableHighlight>
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


// // Searching using Search Bar Filter in React Native List View
// // https://aboutreact.com/react-native-search-bar-filter-on-listview/

// // import React in our code
// import React, { useState, useEffect } from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   Text,
//   StyleSheet,
//   View,
//   FlatList,
//   TextInput,
// } from 'react-native';

// const App = () => {
//   const [search, setSearch] = useState('');
//   const [filteredDataSource, setFilteredDataSource] = useState([]);
//   const [masterDataSource, setMasterDataSource] = useState([]);

//   useEffect(() => {
    
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         setFilteredDataSource(responseJson);
//         setMasterDataSource(responseJson);
//         console.log(responseJson);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);
  

//   const searchFilterFunction = (text) => {
//     // Check if searched text is not blank
//     if (text) {
//       // Inserted text is not blank
//       // Filter the masterDataSource and update FilteredDataSource
//       const newData = masterDataSource.filter(function (item) {
//         // Applying filter for the inserted text in search bar
//         const itemData = item.title
//           ? item.title.toUpperCase()
//           : ''.toUpperCase();
//         const textData = text.toUpperCase();
//         return itemData.indexOf(textData) > -1;
//       });
//       setFilteredDataSource(newData);
//       setSearch(text);
//     } else {
//       // Inserted text is blank
//       // Update FilteredDataSource with masterDataSource
//       setFilteredDataSource(masterDataSource);
//       setSearch(text);
//     }
//   };

//   const ItemView = ({ item }) => {
//     return (
//       // Flat List Item
//       <Text style={styles.itemStyle} onPress={() => getItem(item)}>
//         {item.id}
//         {'.'}
//         {item.title.toUpperCase()}
//       </Text>
//     );
//   };

//   const ItemSeparatorView = () => {
//     return (
//       // Flat List Item Separator
//       <View
//         style={{
//           height: 0.5,
//           width: '100%',
//           backgroundColor: '#C8C8C8',
//         }}
//       />
//     );
//   };

//   const getItem = (item) => {
//     // Function for click on an item
//     alert('Id : ' + item.id + ' Title : ' + item.title);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <TextInput
//           style={styles.textInputStyle}
//           onChangeText={(text) => searchFilterFunction(text)}
//           value={search}
//           underlineColorAndroid="transparent"
//           placeholder="Search Here"
//         />
//         <FlatList
//           data={filteredDataSource}
//           keyExtractor={(item, index) => index.toString()}
//           ItemSeparatorComponent={ItemSeparatorView}
//           renderItem={ItemView}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//   },
//   itemStyle: {
//     padding: 10,
//   },
//   textInputStyle: {
//     height: 40,
//     borderWidth: 1,
//     paddingLeft: 20,
//     margin: 5,
//     borderColor: '#009688',
//     backgroundColor: '#FFFFFF',
//   },
// });

// export default App;
