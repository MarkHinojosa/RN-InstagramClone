import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import Auth0 from "react-native-auth0";
import Config from "react-native-config";
import DeviceInfo from "react-native-device-info";
import SInfo from "react-native-sensitive-info";

const auth0 = new Auth0({
    domain: Auth.AUTH0_DOMAIN,
    clientId: Auth.AUTH0_CLIENT_ID
});


const login = (navi) => {
    console.log(navi, 'navigation that is passed')
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
        }).then(
            //passed in navigation
            res => navi.navigate('MainScreen')
        )
        .catch(error => {
            console.log("error occurrdzz");
            console.log(error);
        });
};

const logout = (navi) => {
    auth0.webAuth
        .clearSession({})
        .then(success => {
            Alert.alert(
                'Logged out!'
            )
            // this.setState({ accessToken: null, loggedIn: false });
        })
        .then(res => {
            navi.navigate('Login')
        })
        .catch(error => {
            console.log(error);
        });
}


class Auth0LoginButton extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <TouchableOpacity
                onPress={() => { login(this.props.navigation) }}
            >
                <View style={{ borderRadius: 5, backgroundColor: 'yellow' }}>
                    <Text style={styles.loginButton_Text}> Login with Auth0  </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

class Auth0LogoutButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => { logout(this.props.navigation) }}
            >
                <View style={{ borderRadius: 5, backgroundColor: 'purple' }}>
                    <Text style={styles.loginButton_Text}> Logout  </Text>
                </View>
            </TouchableOpacity>

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



export { Auth0LoginButton, Auth0LogoutButton }
