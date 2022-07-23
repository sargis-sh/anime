import MyComponent from '../Components/Post/Search';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

const profile = {
    id: 1,
    username: "myUser",
    following: [2, 5, 8, 33, 58, 72, 73, 91]
}

const Discover = () => {
    var rows = [];
    for (let index = 0; index < 1; index++) {
        if(!profile.following.includes(index+1)){
        rows.push(<MyComponent num={index} key={index}/>)}
    }
    return(
        <View style={{ flex: 1 }}>
            <ScrollView>
                <Header></Header>
                <Text style={{ fontWeight: 'bold', fontSize: 60, margin:20 }}>Search for any anime you want!
                </Text>
                {rows}
            </ScrollView>
        </View>
    )
  };
  
export default Discover;