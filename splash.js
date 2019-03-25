import * as React from 'react';
import { Alert, Text, View, StyleSheet, Image, Button, TouchableHighlight, ImageBackground }
  from 'react-native';
import { Constants } from 'expo';


export default class App extends React.Component {

  onPressButton() {
    Alert.alert('Go to Homepage')

  }

  constructor() {
    super()
    this.state = {
      image1Opacity: 1,

    }
  }


  componentDidMount() {
    setInterval(() => {
      if (this.state.image1Opacity >= 1) {
        this.setState((state) => ({
          image1Opacity: 0
        }))
      } else {
        this.setState((state) => ({
          image1Opacity: state.image1Opacity + 0.1
        }))
      }
    }
      , 500)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.animationStuff}>
            <ImageBackground source={require('../dinDinApp/assets/newHomeImage.png')} style={{ width: 275, height: 258  }}>

              <View style={styles.topRight}>
                <Image style={{opacity: this.state.image1Opacity}} source={require('../dinDinApp/assets/upperRight.png')} />
              </View>
              <View style={styles.middleLeft}>
                <Image style={{opacity: this.state.image1Opacity}} source={require('../dinDinApp/assets/leftImage.png')} />
              </View>
              <View style={styles.bottomRight}>
                <Image style={{opacity: this.state.image1Opacity}} source={require('../dinDinApp/assets/bottomRight.png')} />
              </View>
            </ImageBackground>
          </View>
          <Text style={styles.title}>
            Din Din
        </Text>
          <Text style={styles.paragraph}>
            Connecting food lovers
        </Text>
        </View>
        <TouchableHighlight style={styles.bottom} onPress={this.onPressButton} underlayColor="blue">
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#000000",
    justifyContent: 'flex-end'
  },
  img: {
    alignSelf: 'center',
    opacity: this.image1Opacity,
  },
  imgLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    //justifyContent: 'center',
    //alignItems: 'stretch'
  },
  topRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingTop: 20,
  },

  middleLeft:{
    flexDirection: 'column',
    alignItems: 'flex-start',
    
  
  },
  bottomRight:{
    flexDirection: 'column',
    alignItems: 'flex-end'
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
    marginTop: 45,
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
  top: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: "100%",
    height: "90%"
  },
  animationStuff: {


  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#0f8cff",
    width: "100%",
    height: "10%"
  },
  button: {
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
    // fontStretch: 'medium',
    //fontFamily: 'SFUIText-Semibold'
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    //fontStretch: 'medium',
    //fontFamily: 'SFUIText-Semibold'
  },
  toubleOverlay: {
    width: "100%",
    height: "10%",
  }


});