import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable, DrawerLayoutAndroidBase } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png"}}
        width={200}
        height={200}
        />
      </View>
      <View>
        <Text style={styles.title}>Iniciar Sesion</Text>{/* title */}
        <Text style={styles.label}>Correo:</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput style={styles.input}/>
        <Pressable style={styles.send}>
          <Text style={styles.send.textButton}>Enviar</Text>
        </Pressable>
      </View>
      <View style={styles.containerFooter}> {/* container-footer */}
        <Text style={styles.containerFooter.texts}>¿Olvidaste tu contraseña?</Text>
        <Text style={styles.containerFooter.texts}>Registrate</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    padding:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:30,
    fontWeight:"bold"
  },
  label:{
    fontSize:20,
    fontWeight:"bold"
  },
  input:{
    borderRadius:10,
    borderWidth:2,
    borderColor:"black",
    fontSize:15,
    width:"auto",
  },
  send:{
    backgroundColor:"red",
    width:"auto",
    height:"auto",
    borderRadius:10,
    marginTop:15,
    alignItems:"center",
    textButton:{
      color:"white",
      fontSize:20,
      fontWeight:"bold",
    }
  },
  containerFooter:{
    justifyContent:"center",
    alignItems:"center",
    texts:{
      fontSize:20,
      margin:5
    }
  }
});
