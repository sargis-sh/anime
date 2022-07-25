
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground
  } from 'react-native';
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
           <Text style = {styles.fav}>Favourite Characters</Text>
                <View style ={styles.imagecontainer}>
                <Image style={styles.hero} source={require('../assets/lilush.jpg')}/>
                <Image style={styles.hero} source={require('../assets/vanitas.jpg')}/>
                <Image style={styles.hero} source={require('../assets/levi.png')}/>
                </View>
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
      imagecontainer:{
        flexDirection:'row',
      },
      hero:{
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        flexDirection:'row',
        justifyContent: "center",
        alignItems: "center",
         position: "relative",
         margin: 24
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
      fav:{  
        margin:10,
        fontSize:22,
        color:"#0000FF",
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
        backgroundColor: "#9400D3",
      },
});


export default Profile;