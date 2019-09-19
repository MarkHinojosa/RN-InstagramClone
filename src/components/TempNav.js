import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class TempNav extends Component {
    render() {
        return (
            <View style={{
                justifyContent: 'center',
                backgroundColor:'rgb(250,250,250)',
                height: 30,
                marginVertical: 5 }}>
                <Text style={{ textAlign: 'center', fontSize: 18 }}>Instagram</Text>
            </View>
        )
    }
}
