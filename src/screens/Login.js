import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, Button, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
// import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import Auth0 from "react-native-auth0";
import Config from "react-native-config";
import DeviceInfo from "react-native-device-info";
import SInfo from "react-native-sensitive-info";
import Auth from '../../Auth';

const auth0 = new Auth0({
    domain: Auth.AUTH0_DOMAIN,
    clientId: Auth.AUTH0_CLIENT_ID
});


export default class Login extends Component {

    state = {
        hasInitialized: false,
        loggedIn: false
    }


    componentDidMount() {
        SInfo.getItem("accessToken", {}).then(accessToken => {
            if (accessToken) {
                auth0.auth
                    .userInfo({ token: accessToken })
                    .then(data => {
                        this.gotoAccount(data);
                    })
                    .catch(err => {
                        211
                        SInfo.getItem("refreshToken", {}).then(refreshToken => {
                            auth0.auth
                                .refreshToken({ refreshToken: refreshToken })
                                .then(newAccessToken => {
                                    SInfo.setItem("accessToken", newAccessToken);
                                    RNRestart.Restart();
                                })
                                .catch(err2 => {
                                    console.log("err getting new access token");
                                    console.log(err2);
                                });
                        });
                    });
            } else {
                this.setState({
                    hasInitialized: true
                });
                console.log("no access token");
            }
        });
    }



    _login = () => {
        // this.props.navigation.navigate('MainFeed')
    }

    _newUser = () => {
        this.props.navigation.navigate('Register')
    }

    gotoAccount = data => {
        console.log(data, 'this is goToAcctount data ***')
        this.setState({
            hasInitialized: true,
            loggedIn: true
        }, () => this._login())
    }

    login = () => {
        auth0.webAuth
            .authorize({
                scope: Config.AUTHO_SCOPE,
                audience: Config.AUTH0_AUDIENCE,
                device: DeviceInfo.getUniqueID(),
                prompt: "login"
            })
            .then(res => {
                auth0.auth
                    .userInfo({ token: res.accessToken })
                    .then(data => {
                        this.gotoAccount(data);
                    })
                    .catch(err => {
                        console.log("err: ");
                        console.log(JSON.stringify(err));
                    });

                SInfo.setItem("accessToken", res.accessToken, {});
                SInfo.setItem("refreshToken", res.refreshToken, {});
            })
            .catch(error => {
                console.log("error occurrdzz");
                console.log(error);
            });
    };

    logout = () => {
        auth0.webAuth
            .clearSession({})
            .then(success => {
                Alert.alert(
                    'Logged out!'
                );
                this.setState({ accessToken: null });
            })
            .catch(error => {
                console.log(error);
            });
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


                {this.state.hasInitialized && (
                    <Button onPress={this.login} title="Login" />
                )}

                {this.state.loggedIn ? 
                <Button onPress={this.logout} title="Logout" /> : null }



                {/* <LinearGradient style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }} colors={['#4c669f', '#3b5998', '#192f6a']}>
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
                                <Text style={{ color: 'white', borderColor: 'gray', borderWidth: 1, borderRadius: 5, textAlign: 'center' }}> Login  </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => { this._newUser() }}

                    >
                        <Text style={{ color: 'white' }}> New User? </Text> */}
                {/* <GoogleSigninButton
                            style={{ width: 192, height: 48 }}
                            size={GoogleSigninButton.Size.Wide}
                            color={GoogleSigninButton.Color.Dark}
                            onPress={this._signIn}
                            disabled={this.state.isSigninInProgress} /> */}
                {/* </TouchableOpacity>
                </LinearGradient> */}
            </View>

        )
    }
}
