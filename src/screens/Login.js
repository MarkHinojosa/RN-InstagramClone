import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'



export default class Login extends Component {


    _login = () => {
        this.props.navigation.navigate('MainFeed')
    }

    _newUser = () => {
        this.props.navigation.navigate('Register')
    }

    render() {
        return (
            <View
                style={{
                    height: "100%",
                    width: "100%",
                    alignItems: 'center',
                    // justifyContent: 'center'
                }}>
                <TouchableOpacity
                    onPress={() => { this._login() }}
                >
                    <Text> Login  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { this._newUser() }}

                >
                    <Text> New User? </Text>
                </TouchableOpacity>
            </View>

        )
    }
}
