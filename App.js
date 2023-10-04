import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {

  function hola() {
    alert("Hola");
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.input_login} placeholder='Usuario...'/>
      <TextInput style={styles.input_login} placeholder='Contraseña...' secureTextEntry={true}/>

      <TouchableOpacity style={styles.login_btn}>
          <Text style={{fontSize: 16, color: 'white' }}>Iniciar sesión</Text>
      </TouchableOpacity>

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
  input_login: {
    width: "90%", 
    height:55,
    borderColor:'rgba(0, 0, 0, 0.5)',
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 20,
    paddingLeft: 10,
    marginBottom:20
  },
  login_btn:{
    backgroundColor: 'red', 
    width: 170, 
    height: 55, 
    justifyContent:'center', 
    alignItems: 'center',
    borderRadius: 15
  },
});