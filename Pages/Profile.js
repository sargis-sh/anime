
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground
  } from 'react-native';
import Header from '../Components/Header/Header';
import Post from '../Components/Post/Post'

const profile = {
    id: 1,
    username: "myUser",
    following: [2, 5, 8, 33, 58, 72, 73, 91]
}

const Profile = () => {
    var rows = [];
    for (let index = 0; index <1; index++) {
        if(!profile.following.includes(index+1)){
        rows.push(<Post num={index} key={index}/>)}
    }
    return(
        
        <ScrollView>
             <Header></Header>
             <View style={styles.container}>
          <ImageBackground style={styles.header} source={require('../assets/Eren.jpg')}></ImageBackground>
          <Image style={styles.avatar} source={require('../assets/Eren-Yeager.jpg')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Protagonist Titan</Text>
              <Text style={styles.info}>Otaku / Gamer</Text>
              <Text style={styles.description}>I want to rebuild the world and bring piece</Text>
              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Edit Profile</Text>  
              </TouchableOpacity>              
             
            </View>
        </View>
      </View>
        </ScrollView>
  
    )
  };
  
  const styles = StyleSheet.create({
    header:{
        backgroundColor: "#00BFFF",
        height:200,
      },
      avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:130
      },
      name:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600',
      },
      body:{
        marginTop:40,
      },
      bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
      },
      name:{
        fontSize:28,
        color: "#696969",
        fontWeight: "600"
      },
      info:{
        fontSize:16,
        color: "#b4b4b4",
        marginTop:10
      },
      description:{
        fontSize:16,
        color: "#696969",
        marginTop:10,
        textAlign: 'center'
      },
      buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#b4b4b4",
      },
});


export default Profile;