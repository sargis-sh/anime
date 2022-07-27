import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {Picker} from "@react-native-picker/picker"

export default class CategoryScreen extends Component {
  state = {
    selectedgenre: "",
    category: [
      {
        itemName: "Drama"
      },
      {
        itemName: "Romance"
      },
      {
        itemName: "Detective"
      },
      {
        itemName: "Mystery"
      },
      {
        itemName: "Mature"
      },
      {
        itemName: "Fantasy"
      }
    ]
  };

  async onValueChangeGenre(value) {
    this.setState({ selectedgenre: value });
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        {/* <View style={{ flex: 0.3 }}>
          <Text style={styles.textStyle}>Genres</Text>
        </View> */}
        <View style={{ flex: 0.7, fontSize: 14 }}>
          <Picker
            itemStyle={styles.itemStyle}
            mode="dropdown"
            style={styles.pickerStyle}
            selectedValue={this.state.selectedgenre}
            onValueChange={this.onValueChangeGenre.bind(this)}
          >
            {this.state.category.map((item, index) => (
              <Picker.Item
                color="#F58216"
                label={item.itemName}
                value={item.itemName}
                index={index}
                key={index}
              />
            ))}
          </Picker>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    marginTop: 30,
    margin: 5,
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    width: "92%",
    justifyContent: "center",
    alignItems: "center"
  },
  itemStyle: {
    fontSize: 10,
    color: "#F58216"
  },
  pickerStyle: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    width: 200,
    height: 40,
    color: "#F58216",
    fontSize: 14,
  },
  textStyle: {
    fontSize: 24,
    color:'white'
  },
});
