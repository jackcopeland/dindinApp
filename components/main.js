import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ScrollMenu from 'react-horizontal-scrolling-menu';

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
  
      <ScrollView horizontal>

      <Text style={styles.slider}> January         </Text>
      <Text style={styles.slider}> Freburay         </Text>
      <Text style={styles.slider}> March         </Text>
      <Text style={styles.slider}> April         </Text>
      <Text style={styles.slider}> May         </Text>
      <Text style={styles.slider}> June         </Text>
      <Text style={styles.slider}> July         </Text>
      <Text style={styles.slider}> August         </Text>
      <Text style={styles.slider}> September         </Text>
      <Text style={styles.slider}> October         </Text>
      <Text style={styles.slider}> November         </Text>
      <Text style={styles.slider}> December         </Text>
      </ScrollView>
      <ScrollView vertical>

      <View style ={styles.pending}> 
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
  container: {

    flex:1,
    width: "100%",
    height: "90%",
    flexDirection: "column",
    justifyContent: "flex-start",
  }
 
});
