import * as React from 'react';
import { Alert, Text, View, StyleSheet, Image, Button, TouchableHighlight}
from 'react-native';
import { Constants } from 'expo';


export default class App extends React.Component {

  onPressButton(){
    Alert.alert('You touched it')

  }

render() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
       <Image style={styles.img} source={require('../dinDinApp/assets/Illustration.png')} />
        <Text style = {styles.title}>
         Din Din
        </Text>
        <Text style={styles.paragraph}>
          Connecting food lovers
        </Text>
        </View>
      <View style={styles.bottom}>
        <TouchableHighlight onPress={this.onPressButton} underlayColor="blue">           
              <Text style={styles.buttonText}>Get Started</Text>
          </TouchableHighlight>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    backgroundColor: "#000000",
    justifyContent: 'flex-end'
  },
    img: {
    alignSelf: 'center'
  },

  title: {
    alignSelf: 'center',
    width: 88,
    height: 39,
    color: '#353535',
   // fontFamily: "SFUIText-Light",
    fontSize: 29,
    fontWeight: "400",
    lineHeight: 39,
    marginTop:45,
  },
  paragraph: {
    alignSelf: 'center',
    height: 16,
    opacity: 0.5,
  //  fontFamily: "SFUIText-Light",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16
  },
  top:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: "100%",
    height: "90%"
  },
    bottom:{
    justifyContent: 'center',
    backgroundColor: "#0f8cff",
    width: "100%",
    height: "10%"
  },
  button:{
    fontSize: 14,
    justifyContent:'center',
    alignItems: 'center',
   // fontStretch: 'medium',
    //fontFamily: 'SFUIText-Semibold'
  },
  buttonText:{
    fontSize: 14,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
   // fontStretch: 'medium',
    //fontFamily: 'SFUIText-Semibold'
  }


});