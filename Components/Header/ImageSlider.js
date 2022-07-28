import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

import ImageSlider from 'react-native-image-slider';

class Slider extends Component {
  render() {
    const images = [
      'https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/81wu-HcQorL._RI_.jpg',
      'https://img1.ak.crunchyroll.com/i/spire3/501db6b69ced79e79a556b20cbdb9c5d1609784936_full.jpg',
      'https://www.pophorror.com/wp-content/uploads/2017/03/death-note-025.jpg',
      'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/1ec49bbf49fbf2ad2f5eab0ca7c9acd4c280f6b882b83f0629c3a33a2dfcb6d7._RI_V_TTW_.jpg'
    ];

    return (
      <View style={styles.container}>
        <View style={styles.content1}>
          <Text style={styles.contentText}>Most Popular</Text>
        </View>
        <ImageSlider
          loop
          autoPlayWithInterval={3000}
          images={images}
          onPress={({ index }) => alert(index)}
          customSlide={({ index, item, style, width }) => (
            // It's important to put style here because it's got offset inside
            <View
              key={index}
              style={[
                style,
                styles.customSlide,
                { backgroundColor: index % 2 === 0 ? 'white' : 'white' },
              ]}
            >
              <Image source={{ uri: item }} style={styles.customImage} />
            </View>
          )}
          customButtons={(position, move) => (
            <View style={styles.buttons}>
              {images.map((image, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    underlayColor="#ccc"
                    onPress={() => move(index)}
                    style={styles.button}
                  >
                    <Text style={position === index && styles.buttonSelected}>
                      {index + 1}
                    </Text>
                  </TouchableHighlight>
                );
              })}
            </View>
          )}
        />
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
  },
  slider: { backgroundColor: '#000', height: 550 },
//   content1: {
//     width: '100%',
//     height: 50,
//     marginBottom: 10,
//     fontSize: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
  content2: {
    width: '100%',
    height: 100,
    marginTop: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {  margin:20,
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontWeight: 'bold',
   
    fontSize: 40,
    color: 'white'
 },
  buttons: {
    zIndex: 1,
    height: 15,
    marginTop: -25,
 
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  
  },
  button: {
    margin: 3,
    width: 15,
    height: 15,
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSelected: {
    opacity: 1,
    color: 'red',
  },
  customSlide: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customImage: {
    width: '100%',
    height: 400,
  },
});

export default Slider;