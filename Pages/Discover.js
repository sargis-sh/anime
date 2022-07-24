
import { Text, View, ScrollView, StyleSheet } from 'react-native';

import Header from '../Components/Header/Header';
import MyComponent from '../Components/Search/Search';

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
        
        <ScrollView>
            <Header></Header>
          <View style={styles.View}>
            <Text style={{ fontWeight: 'bold', fontSize: 40, margin:20, color:'#fffff' }}>Search for any anime you want!
            </Text>
            {rows}
            </View>
        </ScrollView>
    
    )
  };
  const styles = StyleSheet.create({
    View: {
      flex: 1,
      width: "100%",
      alignItems:'center',
      justifyContent:'center',
    //   backgroundColor: "#282c34",
    //   flexDirection: 'row',
    //   flexWrap: 'wrap'
    }
});



export default Discover;