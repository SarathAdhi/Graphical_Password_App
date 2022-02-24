import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

const getRandomNumber = (most) => {
  var num = Math.floor(Math.random() * most) + 1;
  console.log(num);
};

const getName = (id) => {
  return
}




export default function App() {
  const [arr, setArr] = useState([
    { key: '1', name: '5-star', p: require('./Images/5-star.png') },
    { key: '2', name: 'Dairy Milk', p: require('./Images/dairy-milk.png') },
    { key: '3', name: 'Kitkat', p: require('./Images/kitkat.png') },
    { key: '4', name: 'Perk', p: require('./Images/perk.png') },
    { key: '5', name: 'Snickers', p: require('./Images/snickers.png') },
    { key: '6', name: 'Milky Bar', p: require('./Images/milky-bar.png') }
  ]);
  return (
    <ScrollView style={styles.screen}>
      <View >
        <View style={styles.heading}>
          <Text style={styles.headingText} onTouchEnd={getRandomNumber(5)}>
            CYPHER MAINS
          </Text>
        </View>
        <View style={styles.line}></View>

        <View style={styles.main}>

          {arr.map((x) => {

            return (
              <TouchableOpacity key={x.key} onPress={() => alert(x.name)}>
                <Image style={styles.img} source={x.p} />
                <Text>{x.key} {x.name}</Text>
              </TouchableOpacity>
            )
          })}


          {/* <View style={styles.row}>
          <View style={styles.item}>
		  <Image style={styles.img} source={require("./Images/5-star.png")} />
            <Text style={styles.num}>1</Text>
          </View>
          <View style={styles.item}>
		  <Image style={styles.img} source={require("./Images/dairy-milk.png")} />
            <Text style={styles.num}>2</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.item}>
		  <Image style={styles.img} source={require("./Images/kitkat.png")} />
            <Text style={styles.num}>3</Text>
          </View>
          <View style={styles.item}>
		  <Image style={styles.img} source={require("./Images/perk.png")} />
            <Text style={styles.num}>4</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.item}>
		  <Image style={styles.img} source={require("./Images/snickers.png")} />
            <Text style={styles.num}>5</Text>
          </View>
          <View style={styles.item}>
		  <Image style={styles.img} source={require("./Images/milky-bar.png")} />
            <Text style={styles.num}>6</Text>
          </View>
        </View> */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 40,
    backgroundColor: "#BFFFF0",
    width: "100%",
    height: "100%",
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 0.2,
  },
  heading: {
    // something
  },
  headingText: {
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "700",
  },
  main: {
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30
  },
  row: {
    flexDirection: "row",
    height: 100,
    margin: 30,
  },
  num: {
    marginHorizontal: 60,
  },
  item: {
    flexDirection: 'column'
  },
  img: {
    width: 100,
    height: 100,
    marginLeft: 10,
    margin: 20
  }
});
