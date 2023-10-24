import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import CustomButton from "../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  useEffect(function () {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const [username, setUsername] = useState("Usuario");
  const [password, setPassword] = useState("");

  async function login() {
    const data = {
      user: username,
      pass: password,
    };

    try {
      await AsyncStorage.setItem("data", JSON.stringify(data));
      console.log("Se guardaron los datos");
    } catch (e) {
      console.log(e);
    }
    navigation.navigate("Main");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.login_header}>Hola, {username}.</Text>
      <TextInput
        onChangeText={setUsername}
        style={styles.input_login}
        placeholder="Usuario..."
      />
      <TextInput
        onChangeText={setPassword}
        style={styles.input_login}
        placeholder="Contraseña..."
        secureTextEntry={true}
      />
      <CustomButton text={"Iniciar sesión"} color={"red"} action={login} />
      <StatusBar style="auto" />
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
  input_login: {
    width: "90%",
    height: 55,
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 22,
    paddingLeft: 10,
    marginBottom: 20,
  },
  login_header: {
    fontSize: 40,
    marginBottom: 40,
    fontWeight: "bold",
  },
});
