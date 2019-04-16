import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class CardForDetails extends React.Component {

    constructor(props){
        super(props)
       // console.log(this.state.name)

    }

    render() {
        return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image source={require('../assets/pic3.png')}  />
                <Text style={styles.details}>Silver Kitchen, New Street</Text>
                <Text style={styles.details}>Mon 22 April - 8:00 PM</Text>
                <Text style={styles.detailsSmaller}>Hosted by Alma Evans</Text>
            </View>
            <View style={styles.bottom}>
                <View style={styles.respond}>
                    <Image source={require('../assets/Combined Shape Copy 3.png')}  />
                    <Text style={styles.decline}>Decline</Text>
                </View>
                <View style={styles.respond}>
                    <Image source={require('../assets/Combined Shape Copy 4.png')}  />
                    <Text style={styles.accept}>Accept</Text>
                </View>
            </View>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection: "column",
      width: "80%",
      height: "10%",
      justifyContent: "center",
    },

    top: {
        flexDirection: "column",
        width: "100%",
        height: "70%",
        justifyContent: "center",
        alignItems:"center",
        
    },
    bottom: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        height: "30%"
    },
    respond: {

    },
    decline: {
        color: "red"
    },
    accept: {
        color: "green"
    },
    title: {

    },
    details: {
        paddingTop: 10,

    },
    detailsSmaller: {
        paddingTop: 10,
        fontSize: 14,
        color: "grey"

    }
  });