import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView , Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Card from './card'
import firebase from 'firebase'



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDyr0Vi_3YEcXR6SGucSTWaOxOqQFamgKg",
    authDomain: "dindinapp-a2aec.firebaseapp.com",
    databaseURL: "https://dindinapp-a2aec.firebaseio.com",
    projectId: "dindinapp-a2aec",
    storageBucket: "dindinapp-a2aec.appspot.com",
    messagingSenderId: "12846296493"
  };

  export default class PendingInvitations extends React.Component {
    constructor(props){
        super(props)
        if (!firebase.apps.length) {
            firebase.initializeApp(config);

        }
        this.state = {
            hasData: true,
           

        }
   }


   componentDidMount(){
        this.getDatafromFirebase()
   }
   

   getDatafromFirebase(){
       console.log("started firebase")

       let that = this
       //for(var key in snapshot.val()){
        firebase.database().ref('/').on('value', function (snapshot) {
            
            that.setState({dataArray: snapshot.val() , hasData:true} )
            console.log(snapshot.val())
       
        });
   // }
        console.log("got here")
   }

   /**
    * Flat list that renders all the pending invitations
    * or scrollview with horizontal scrolling
    * each element in the scroll is a card. 
    */

   render(){
       return(<View></View>)
   }



}
