import Post from '../Components/Post/Post';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

const profile = {
    id: 1,
    username: "myUser",
    following: [2, 5, 8, 33, 58, 72, 73, 91]
}

const Discover = () => {
    return(
        <View style={styles.View}>
            <Text>Discover!</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    View: {
      flex: 1,
      width: "100%",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#282c34"
    }
});

export default Discover;