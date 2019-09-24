import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Login, MainFeed, Camera, Profile, Register } from './src/screens';
import { createBottomTabNavigator } from 'react-navigation-tabs';



const Tabs = createBottomTabNavigator({
  Feed: MainFeed,
  Camera: Camera,
  Profile: Profile
})

// const IntroStack = createStackNavigator({
//   login: Login,
//   register: Register
// })

const RootStack = createStackNavigator(
  {
    Login: Login,
    Register: Register,
    MainFeed: Tabs,
  },
  {
    initialRouteName: 'Login',
    // defaultNavigationOptions: {
    //   headerTintColor: '#fff',
    //   headerStyle: {
    //     backgroundColor: 'purple',
    //   },
    // },
    // navigationOptions: {
    //   title: 'Home!',
    // },
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}