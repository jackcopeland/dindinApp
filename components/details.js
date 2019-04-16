import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Button} from 'react-native';
import { StackNavigator, NavigationEvents } from 'react-navigation';
import Card from './card';
import CardForDetails from './cardForDetails';
import { MapView } from 'expo';


export default class App extends React.Component {

    render() {
        return (

        <View style={styles.container}>
          <View style={styles.card}>
            <CardForDetails> </CardForDetails>
         </View>

            <View style={styles.mapContainer}>
        
            <MapView style ={styles.map}
            initialRegion={{
            latitude: 38.0293059,
            longitude: -78.4766781,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
            />
            </View>
         </View>
    );
}
}

const styles = StyleSheet.create({
    card: {
      flexDirection: "column",
      alignItems: "center",
      height:"32%",
      width: "100%",
      justifyContent:"center",
    },
    mapContainer:{
        height:"68%"
    },

    map:{
        position: 'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        justifyContent: 'flex-end',
        alignItems:"center",

    },
    container: {
        flex: 1,
      //  justifyContent: 'flex-end'
      },



  
  });