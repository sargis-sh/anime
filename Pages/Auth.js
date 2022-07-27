
import {
    StatusBar,
    Button,
    TouchableHighlight,
    handleClick,
      ScrollView,
      StyleSheet,
      Text,
      View,
      Image,
      TouchableOpacity,
      ImageBackground
    } from 'react-native';
  import Post from '../Components/Post/Post';
 
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import * as RootNavigation from '../Components/Tab/RootNavigation';
  const profile = {
      id: 1,
      username: "myUser",
      following: [2, 5, 8, 33, 58, 72, 73, 91]
  }
  
  const Auth = () => {
      var rows = [];
      for (let index = 0; index <1; index++) {
          if(!profile.following.includes(index+1)){
          rows.push(<Post num={index} key={index}/>)}
      }
  
    
      return(
          
          
        <View style={styles.container}>
              <Text style={styles.contentText}>Welcome To Your Profile</Text>
        <Image
        style={styles.image}
        source={require('../assets/Logo.png')}
        />
       
       <View style={styles.ButtonContainer}>
        <TouchableHighlight style={styles.Button} onPress={() => 
RootNavigation.navigate('SignIn')}>
          <Text style={styles.ButtonText}>Sign In</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.Button} onPress={() => 
RootNavigation.navigate('SignUp')}>
          <Text style={styles.ButtonText}>Sign Up</Text>
        </TouchableHighlight>
      </View>
           </View>
         
      )
    };
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#282828',
            alignItems: 'center',
            justifyContent: 'center'
          },
         
          image: {
            width: 200,
            height: 200,
            borderColor: 'orange',
            borderWidth: 2,
            borderRadius: 100,
            marginTop:10
          },
          ButtonContainer: {
            margin: 20,
            flexDirection: "row",
            // height: 100,
            alignItems: "center",
           
          },
          ButtonText:{
            fontSize: 17,
            color: "#272727",
          },
          Button: {
            marginRight: 28.3,
            marginLeft: 28.3,
            height: 40,
            width:100,
            borderRadius: 6,
            padding: 10,
            backgroundColor: "#F58216",
            justifyContent: "center",
            alignItems: "center"
          },
          contentText: { 
            marginTop:30,
           fontFamily: 'Roboto',
           textAlign: 'center',
           fontWeight: 'bold',
          
           fontSize: 40,
           color: 'white'},
  });
  
  
  export default Auth;