import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class Login extends Component {
    _login = () => {
        this.props.navigation.navigate('MainFeed')
    }
    render() {
        return (
            <TouchableOpacity
                style={{
                    height: "100%",
                    width: "100%",
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => { this._login() }}

            >
                <Text> Login Screen </Text>
            </TouchableOpacity>
        )
    }
}
