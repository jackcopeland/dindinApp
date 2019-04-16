import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import main from './components/main';
import splash from './components/splash';
import details from './components/details';



const rootStack = createStackNavigator({
    splash: splash,
    main: main,
    details: details, 
  },{
    initalRouteName:'splash',}
)


const AppContainer = createAppContainer(rootStack)


export default class App extends React.Component {
  render() {
    return (
      <AppContainer persistenceKey={"NavigationState"} />
    );
  }
}
