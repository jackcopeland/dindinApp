import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class card extends React.Component {
    render() {
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>Alma Evans</Text>
                <Text style={styles.details}>Sunday 17 June - 8:00pm</Text>
            </View>
            <View style={styles.bottom}>
                <View style={styles.respond}>
                    <Text style={styles.decline}>Decline</Text>
                </View>
                <View style={styles.respond}>
                    <Text style={styles.accept}>Accept</Text>
                </View>
            </View>
        </View>
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
        width: "100%",
        height: "50%"
    },
    bottom: {
        flexDirection: "row",
        width: "100%",
        height: "50%"
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

    }
  });