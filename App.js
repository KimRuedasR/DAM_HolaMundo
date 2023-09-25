import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState(''); // State to store input value

  // Function to handle button press
  const handleButtonPress = () => {
    alert(`You entered: ${inputValue}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello world</Text>

      <Text>DAM</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe algo"
        onChangeText={(text) => setInputValue(text)}
        value={inputValue}
      />

      <Button title="Presioname" onPress={handleButtonPress} />

      <View style={styles.box}></View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    marginBottom: 16,
  },
});
