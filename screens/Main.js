import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
// import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Main({ navigation }) {
  const [dogs, setDogs] = useState([]);

  useEffect(function () {
    navigation.setOptions({
      headerShown: true,
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "blue",
      },
    });
    loadDogs();
  });

  async function loadDogs() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/50");
    const data = await response.json();
    const d = data.message.map((url, id) => {
      return {
        id: id,
        url: url,
      };
    });
    setDogs(d);
  }

  const Item = (props) => (
    <View style={styles.item}>
      <Image
        style={{ width: 200, height: 200 }}
        source={{
          uri: props.url,
        }}
      />
    </View>
  );

  const renderItem = ({ item }) => <Item url={item.url} />;

  return (
    <View style={styles.container}>
      <FlatList data={dogs} renderItem={renderItem} />
      <StatusBar style={"light"} />
    </View>
  );
}

// async function loadData() {
//   const data = await AsyncStorage.getItem("data");
//   console.log(JSON.parse(data));
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
