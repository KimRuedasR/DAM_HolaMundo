import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import codegenNativeCommands from "react-native/Libraries/Utilities/codegenNativeCommands";
import CustomButton from "../components/CustomButton";

export default function App() {
  const [username, setUsername] = useState("Usuario");

  function headerHandler(text) {
    setUsername(text);
    console.log("header: " + username);
    console.log("input: " + text);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.login_header}>Hola, {username}.</Text>
      <CustomButton text={"Iniciar sesión"} color={"blue"} />
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
