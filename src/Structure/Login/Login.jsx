import { View, TouchableOpacity, SafeAreaView, StyleSheet, Text, Image, TextInput, Alert } from 'react-native';
import React from 'react';
import Constants from 'expo-constants'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { auth } from './Data/firebase-config';
import { signInWithEmailAndPassword } from '@firebase/auth';


const Login =()=> {

  const navigation = useNavigation();

  const goToStack = () => {
    navigation.navigate('DrawerS')
    navigation.reset({
      index: 0,
      routes: [{ name: 'DrawerS' }],
    });
  };

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Usuario logueado')
      const user = userCredential.user
      console.log(user)
      navigation.navigate('DrawerS')
      navigation.reset({
        index: 0,
        routes: [{ name: 'DrawerS' }],
      });
    }).catch((error) => {
      Alert.alert('Error', 'Usuario o contraseña incorrectos')})}
  
return (
    <SafeAreaView style={styles.container}>
    
      {/* Encabezado con el logo */}
      <View style={styles.header}>
        <Image source={require('./Data/INMOBINDER-03.png')} style={styles.imgLogo} />
      </View>

      {/* Contenido principal del inicio de sesión */}
      <View style={LoginStyles.containerLogin}>
        <Text style={{ ...LoginStyles.textLogin}}>Iniciar sesión</Text>
        <Text style={{ ...LoginStyles.text1}}>¿No tienes cuenta?<Text style={{ fontWeight:'bold' }}> Actívala</Text></Text>

        <View style={{flexDirection:'row', marginTop: 18}}>
          <MaterialCommunityIcons name='at' size={25} style={{alignSelf:'center'}}/>
          <TextInput onChangeText={(text) => setEmail(text)} placeholder='Correo electrónico' style={{ ...LoginStyles.input}}/>
        </View>

        <View style={{flexDirection:'row'}}>
          <MaterialCommunityIcons name='lock' size={25} style={{alignSelf:'center'}}/>
          <TextInput onChangeText={(text) => setPassword(text)} placeholder='Contraseña' style={LoginStyles.input}/>
        </View>

        <Text style={{ ...LoginStyles.text2}}>Mantener la sesión iniciada</Text>

        {/* Botón de inicio de sesión */}
        <View>
          {/* Inicio de sesión con Google */}
          <TouchableOpacity style={LoginStyles.containerLoginGoogle}  onPress={handleSignIn}> 
            <Image source={require('./Data/google.png')} style={LoginStyles.imgGoogle}/>
            <Text style={{ ...LoginStyles.loginGoogle, }}>Ingresar con Google</Text>           
          </TouchableOpacity>

          {/* Enlace para recuperar contraseña */}
          <TouchableOpacity onPress={goToStack}>
            <Text style={{ ...LoginStyles.RecoverPassword}} > ¿Has olvidado tu contraseña? </Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {     
    alignItems: 'center',
    flex: 1,
    backgroundColor:'#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  logoText: {
    color: 'rgb(0,0,0)',
    fontSize: 32,
    fontWeight: "bold",
  },

  imgLogo: {
    resizeMode: 'center',
    width: 100,
    height: 100,
  },

  logoBack: {
    color: 'rgb(0,0,0)',
    marginRight: -10,
  },

  back:{
    marginTop: Constants.statusBarHeight,
    flexDirection: "row",
    marginRight: "auto",
    alignItems: "center",
  },

  header:{
    flexDirection: 'row',
    alignItems: 'center',
  },    
})



const LoginStyles = StyleSheet.create({

  containerLogin:{    
    width: "90%",
    height: "70%",
    borderRadius: 20,
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowColor: "rgba(0, 0, 0, 1)",
    backgroundColor: 'rgb(255, 255, 255)',
  },

  textLogin:{
    fontSize: 28,
    marginTop: '6%',
    fontWeight: 'bold',
  },

  text1:{
    fontSize: 15,
  },

  text2:{
    fontSize: 10,
    //width: "90%",
    //marginLeft: "5%",
    //marginTop: -10,
  },

  input:{
    width: '85%',
    height: 40,
    borderWidth:2,
    margin:10,
    borderRadius:10,
    paddingLeft: 10,
  },

  containerBtn:{
    alignItems: "center",
  },

  btnStyle:{
    backgroundColor: 'rgb(9,27,43)',
    borderRadius: 10,
    width: 100,
    height: 40,
    marginTop: '10%',
    shadowOpacity: 1,
      elevation: 4,
      shadowRadius: 4,
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowColor: "rgba(0, 0, 0, 1)",
  },

  textBtn:{
    color: 'rgb(255,255,255)',
    fontSize: 14,
    textAlign: "center",
  },

  containerLoginGoogle:{
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 10,
    width: 220,
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    shadowOpacity: 1,
      elevation: 4,
      shadowRadius: 4,
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowColor: "rgba(0, 0, 0, 1)",
      backgroundColor: 'rgb(255, 255, 255)',
      marginTop: '3%',
  },

  loginGoogle:{
    fontSize: 15,
    paddingLeft: 10,
  },

  imgGoogle:{
    width: 25,
    height: 25,
  },

  RecoverPassword:{
    fontSize: 12,
    textAlign: "center",
    marginTop: '7%',
  }
})