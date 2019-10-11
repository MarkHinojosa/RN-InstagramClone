/*/import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Login, MainFeed, Profile, Camera } from './screens'
// import { SwitchNavigator, TabNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

class HeaderComponent extends Component {
    render() {
        return (
            <Text>
                dasf
            </Text>
        )
    }
}

class InstaClone extends Component {

    render() {
        return (
            <View style={{ height: 100, width: 100 }}>
                <Text>hello</Text>
            </View>
        )
    }
}

const Tabs = createBottomTabNavigator({
    feed: MainFeed,
    camera: Camera,
    profile: Profile
})

const MainStack = createStackNavigator(
    {
        Login: Login,
        main: Tabs,
    },
    {
        initialRouteName: 'Login'
    }
)

const AppNavigator = createStackNavigator({
    Home: {
        screen: InstaClone,
    },
});


export default createAppContainer(Tabs);



// export default InstaClone;
*/