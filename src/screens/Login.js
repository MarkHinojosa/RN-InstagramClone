import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, Alert, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
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
    static navigationOptions = {
        header: null,
    };

    state = {
        hasInitialized: false,
        loggedIn: false
    }


    componentDidMount() {

        this.setState({
            hasInitialized: true
        });


        // SInfo.getItem("accessToken", {}).then(accessToken => {
        //     if (accessToken) {
        //         auth0.auth
        //             .userInfo({ token: accessToken })
        //             .then(data => {
        //                 this.gotoAccount(data);
        //             })
        //             .catch(err => {
        //                 211
        //                 SInfo.getItem("refreshToken", {}).then(refreshToken => {
        //                     auth0.auth
        //                         .refreshToken({ refreshToken: refreshToken })
        //                         .then(newAccessToken => {
        //                             SInfo.setItem("accessToken", newAccessToken);
        //                             RNRestart.Restart();
        //                         })
        //                         .catch(err2 => {
        //                             console.log("err getting new access token");
        //                             console.log(err2);
        //                         });
        //                 });
        //             });
        //     } else {
        //         this.setState({
        //             hasInitialized: true
        //         });
        //         console.log("no access token");
        //     }
        // });
    }



    _login = () => {
        this.props.navigation.navigate('MainScreen')
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
        console.log('clicked login')
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
                this.setState({ accessToken: null, loggedIn: false });
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
                {/* {this.state.loggedIn ?
                    <Button onPress={this.logout} title="Logout" /> : null} */}
                <LinearGradient style={styles.linearGradient}
                    colors={
                        ['#4c669f', '#3b5998', '#192f6a']
                    }>
                    <View
                        style={{ width: '100%', height: '100%' }}
                    >
                        <Text style={styles.title_Text}> The War-Pit </Text>
                        {this.state.hasInitialized && (
                            <View style={styles.bottomSubContainer}>
                                <TouchableOpacity
                                    onPress={() => { this.login() }}

                                >
                                    <View style={{ borderRadius: 5, backgroundColor: 'yellow' }}>
                                        <Text style={styles.loginButton_Text}> Login with Auth0  </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                </LinearGradient>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    linearGradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title_Text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 40,
        marginVertical: '15%'
    },
    bottomSubContainer: {
        borderRadius: 5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    loginButton_Text: {
        color: 'black',
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 20,
        textAlign: 'center',
        borderRadius: 5
    }
})