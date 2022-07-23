import Post from '../Components/Post/Post';
import { StyleSheet, Text, View } from 'react-native';

const profile = {
    id: 1,
    username: "myUser",
    following: [2, 5, 8, 33, 58, 72, 73, 91]
}

const Profile = () => {
    var rows = [];
    for (let index = 0; index < 100; index++) {
        if(profile.id==index+1){
        rows.push(<Post num={index} key={index}/>)}
    }
    return(
        <View style={styles.View}>
            <Text>{profile.username}</Text>
            {rows}
        </View>
    );
};

const styles = StyleSheet.create({
    View: {
      flex: 1,
      width: "100%",
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: "#282c34",
      flexDirection: 'column'
    }
});

export default Profile;