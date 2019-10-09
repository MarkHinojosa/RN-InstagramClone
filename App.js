import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Login, MainFeed, Camera, Profile, Register } from './src/screens';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';


class CustomNavLogout extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity>
          <Text>
            Logout
        </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

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
    MainScreen: {
      screen: Tabs,
      navigationOptions: () => ({
        title: `The War-Pit!`,
        headerBackTitle: null,
        headerLeft: null,
        headerRight: <CustomNavLogout/>
      }),
    },
    // navigationOptions: () => ({
    //   title: `A`,
    //   headerBackTitle: null,
    // }),
  },
  {
    initialRouteName: 'Login',
    // defaultNavigationOptions: {
    //   headerTitle: <CustomNav />,
    //   headerBackTitle: null,
    // },
    // headerBackTitleVisible: false,
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