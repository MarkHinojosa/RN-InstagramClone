import Auth0 from "react-native-auth0";
import Config from "react-native-config";
import DeviceInfo from "react-native-device-info";
import SInfo from "react-native-sensitive-info";
// import Auth from '../../Auth';


const auth0 = new Auth0({
    domain: Auth.AUTH0_DOMAIN,
    clientId: Auth.AUTH0_CLIENT_ID
});


const login = () => {
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
        }).then(
            res => this.props.navigation.navigate('MainScreen'))
        .catch(error => {
            console.log("error occurrdzz");
            console.log(error);
        });
};

const logout = () => {
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


export { login, logout };