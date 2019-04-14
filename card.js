import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Card extends React.Component {
    constructor(props){
        super(props)
       // console.log(this.state.name)

    }

    render() {
        return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image source={require('../assets/pic3.png')}  />
                <View style={styles.deets}>
                    <Text style={styles.title}>Alma Evans</Text>
                    <Text style={styles.details}>Sunday 17 June - 8:00pm</Text>
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.decline}>
                    <Image source={require('../assets/CombinedShapeCopy3.png')}  />
                    <Text style={styles.decline}>Decline</Text>
                </View>
                <View style={styles.accept}>
                    <Image source={require('../assets/CombinedShapeCopy4.png')}  />
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
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100%",
        height: "50%"
    },
    deets: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    bottom: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        height: "50%"
    },
    decline: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        color: "red"
    },
    accept: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: "green"
    },
    title: {

    },
    details: {

    }
  });