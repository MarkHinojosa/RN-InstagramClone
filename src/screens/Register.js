import React, { Component } from 'react'
import { Text, View, Button, TextInput, StyleSheet } from 'react-native'

export default class Register extends Component {
    constructor() {
        super()
        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    }
    _register = () => {
        //send credentials to server
        //if signup success
        this.props.navigation.navigate('main');
        //else error message

    }

    _updateTextUsername = (text) => {
        console.log(text, 'username Text');
        this.setState({ username: text })

    }

    _updateTextPassword = (text) => {
        console.log(text, 'password Text');
        this.setState({ password: text })

    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder={'Username'}
                    autoCorrect={false}
                    autoCompleteType={'off'}
                    onChangeText={text => this._updateTextUsername(text)}
                    style={styles.textInput}

                />
                <TextInput
                    placeholder={'Password'}
                    secureTextEntry
                    onChangeText={(text) => this._updateTextPassword(text)}
                    style={styles.textInput}
                />
                <Button onPress={this._register()} title="Signup" />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    button: {

    },
    textInput: {
        borderColor: 'red',
        borderWidth: 1,
        marginVertical: 10
    }
})

