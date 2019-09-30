import React, { Component } from 'react'
import { Text, View, Button, TextInput, StyleSheet } from 'react-native'
import axios from 'axios';

export default class Register extends Component {
    constructor() {
        super()
        this.state = {
            credentials: {
                email: '',
                username: '',
                password: ''
            }
        }
    }
    _register = async () => {
        let registerAttempt = '';

        //send credentials to server
        try {
            const response = await axios.post('http://10.0.3.2:3001/api/user/register', {
                "email": this.state.email,
                "username": this.state.username,
                "password": this.state.password,
            }).then(res => console.log('saved user!')).then(() => registerAttempt = true)
        } catch (error) {
            console.log(error);
        }
        if (registerAttempt == true) {
            console.log('success!');
            this._navigateToLogin();
        } else if (registerAttempt == false) {
            console.log('attempt failed');
            alert('Username already exists!');
        }
    }

    _navigateToLogin = () => {
        this.props.navigation.navigate('Login');
    }

    _updateTextUsername = (text) => {
        console.log(text, 'username Text');
        this.setState({ username: text })

    }

    _updateTextPassword = (text) => {
        console.log(text, 'password Text');
        this.setState({ password: text })

    }

    _updateTextEmail = (text) => {
        console.log(text, 'email Text');
        this.setState({ email: text })

    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder={'Email'}
                    autoCorrect={false}
                    autoCompleteType={'off'}
                    onChangeText={text => this._updateTextEmail(text)}
                    style={styles.textInput}

                />
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
                <Button onPress={() => this._register()} title="Signup" />
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

