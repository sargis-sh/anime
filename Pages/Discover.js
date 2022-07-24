// import MyComponent from '../Components/Post/Search';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Post from '../Components/Post/Post';
import { TextInput } from 'react-native-paper';
import React from 'react';
import { useEffect, useState } from 'react';
var rows = [];
import { objects } from '../Components/Post/Post';
const Discover = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    useEffect(()=>{
        rows = [];
        console.log(searchQuery);
        for (let index = 0; index < 10; index++) {
            if(objects[index].animeObjectName.toUpperCase().includes(searchQuery.toUpperCase().trim().replace(/\s/g, ""))){
                console.log("ejnwdskjwejks")
        rows.push(<Post num={index} key={index+1} />);
            }
        }
    }, []);
    
    
    
    return(
        <View style={styles.View}>
            <ScrollView>
                <View>
            <View style ={styles.search}>
                <TextInput
                    placeholder="Search"
                    onChangeText={(value) => {
                        setSearchQuery(value)
                      }}
                    value={searchQuery}
                />
            </View>
                <Text style={{ fontWeight: 'bold', fontSize: 60, margin:20 }}>Search for any anime you want!
                </Text>
                {rows}
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    View: {
      flex: 1,
      width: "100%",
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: "#282c34",
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
});

export default Discover;