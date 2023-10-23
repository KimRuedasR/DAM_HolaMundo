import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton";

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

  function goToLogin() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <CustomButton text={"Regresar"} color={"blue"} action={goToLogin} />
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
