import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

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
                    flexDirection: 'column',
                    flex: 1
                }}>
                <LinearGradient style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }} colors={['#4c669f', '#3b5998', '#192f6a']}>
                    <View
                        style={{ width: '80%', height: '40%' }}
                    >
                        <TextInput
                            placeholder={'username'}
                            style={{ backgroundColor: 'white', borderRadius: 10, marginVertical: 10 }}
                        />
                        <TextInput
                            placeholder={'password'}
                            style={{ backgroundColor: 'white', borderRadius: 10, marginVertical: 10 }}
                        />
                        <View style={{ alignItems: 'flex-end' }}>
                            <TouchableOpacity
                                onPress={() => { this._login() }}

                            >
                                <Text style={{ color:'white', borderColor: 'gray', borderWidth: 1, borderRadius: 5, textAlign:'center'}}> Login  </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => { this._newUser() }}

                    >
                        <Text style={{color: 'white'}}> New User? </Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>

        )
    }
}
