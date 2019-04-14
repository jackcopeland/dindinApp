import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Card from './card';

export default class main extends React.Component {

  static navigationOptions = {
    title: 'DinDin',
    headerStyle: {
      backgroundColor: 'white',
    },
      headerTintColor: 'black',
      headerTitleStyle: {
      fontWeight: "400" ,

    },
    headerRight: (
      
      <Image source={require('../assets/searchButton.png')}  />
      )

     

    };

   

  render() {
    return (

      <View style={styles.container}>
      <View style={styles.calendar}>
      <ScrollView horizontal>

      <Button title="January        " size = '9' color="black" onPress = ""/>
      <Button title="February        " size = '9' color="black" onPress = ""/>
      <Button title="March        " size = '9' color="black" onPress = ""/>
      <Button title="April        " size = '9' color="black" onPress = ""/>
      <Button title="May        " size = '9' color="black" onPress = ""/>
      <Button title="June        " size = '9' color="black" onPress = ""/>
      <Button title="July        " size = '9' color="black" onPress = ""/>
      <Button title="August        " size = '9' color="black" onPress = ""/>
      <Button title="September        " size = '9' color="black" onPress = ""/>
      <Button title="October        " size = '9' color="black" onPress = ""/>
      <Button title="November        " size = '9' color="black" onPress = ""/>
      <Button title="December        " size = '9' color="black" onPress = ""/>
      </ScrollView>
      </View>
      <View style={styles.card}>
      <Card></Card>
      </View>
      <ScrollView>
      <View style={styles.events}>
        <View style= {styles.date}>
          <Text style={styles.dates}>Tuesday 12 June</Text>
        </View>
        <View style={styles.event}>
          <View style={styles.left}>
            <Image source={require('../assets/pic1.png')}  />
            <View style={styles.info}>
              <Text style={styles.name}>George Samson</Text>
              <Text style={styles.name}>5:00 pm</Text>
            </View>
          </View>
          <View style={styles.contact}>
            <Image source={require('../assets/call.png')}  />
            <Image source={require('../assets/email.png')}  />
          </View>
        </View>
        <View style= {styles.date}>
          <Text style={styles.dates}>Wednesday 13 June</Text>
        </View>
        <View style={styles.event}>
          <Image source={require('../assets/freedate.png')}  />
        </View>
        <View style= {styles.date}>
          <Text style={styles.dates}>Thursday 14 June</Text>
        </View>
        <View style={styles.event}>
          <View style={styles.left}>
            <Image source={require('../assets/pic2.png')}  />
            <View style={styles.info}>
              <Text style={styles.name}>Carries Potter</Text>
              <Text style={styles.name}>10:00 pm</Text>
            </View>
          </View>
          <View style={styles.contact}>
            <Image source={require('../assets/call.png')}  />
            <Image source={require('../assets/email.png')}  />
          </View>
        </View>
      </View>
      </ScrollView>
      </View>
      
   
        
    );
  }
}

const styles = StyleSheet.create({
  top: {
     // flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      width: "100%",
      height: "5%",
  },
  calendar: {
    height: "7%"
  },
  slider: {
   
    paddingTop: 12,
    fontSize: 16, 
    paddingBottom: 0,

  },

  pending: {
    flex:1,
    paddingTop: 20,
    height: "60%",
    width: "75%",
    alignSelf: "center",
    backgroundColor: "blue",
  },
  card: {
    flexDirection: "column",
    alignItems: "center",
    height: 133,
    width: 315
  },
  container: {

    flex:1,
    width: "100%",
    height: "90%",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  events: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "95%",
    height: "50%"
  },
  event: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 80
  },
  date: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  dates: {
    //fontFamily: "SFUIText-Medium",
    //width: 106,
    //height: 15
  },
  name: {
    //fontFamily: "SFUIText-Regular",
    //width: 106,
    //height: 16
  },
  left: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%"
  },
  info: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  contact: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "25%"
  }

});
