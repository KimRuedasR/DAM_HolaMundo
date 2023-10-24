import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Main({ navigation }) {
  useEffect(function () {
    navigation.setOptions({
      headerShown: true,
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "blue",
      },
    });
  });

  async function loadData() {
    const data = await AsyncStorage.getItem("data");
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <CustomButton text={"Regresar"} color={"blue"} action={loadData} />
      <StatusBar style={"light"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
