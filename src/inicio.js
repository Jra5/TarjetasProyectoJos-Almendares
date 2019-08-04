import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,
    TouchableOpacity, ImageBackground} from 'react-native';



export default class App extends Component{
    static navigationOptions = {
        header:null
    
      }
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.container2}>
            <Text style={styles.welcome}>Bienvenidos a mi Aplicación Móvil</Text>
          </View>
          <Text style={styles.welcome2}>FlashCard Educativo de Insectos</Text>
          <Text style={styles.welcome3}>Creado por: José Raúl Almendares Servellón</Text>
          <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('card')}><Text style={styles.Button}>Iniciar</Text></TouchableOpacity>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#1c3344',
    },
    container2:{
      fontWeight:"bold",
      color:'#000',
      backgroundColor: '#fff',
      borderTopWidth: 4,
      borderBottomWidth: 4,
      width: '100%',
      marginBottom: 15,
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 20,
    },

    welcome2: {
      fontSize: 16,
      textAlign: 'center',
      color:'#fff',
      marginTop: 10,
    },

    welcome3: {
      fontSize: 16,
      textAlign: 'center',
      color:'#000',
      fontWeight:"bold",
    },

    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },

    Button: {
      backgroundColor: '#c9dff0',
      padding: 5,
      marginTop: 15,
      fontWeight:"bold",
    },

  });