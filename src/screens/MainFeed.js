import React, { Component } from 'react'
import { Text, View } from 'react-native'
import TempNav from '../components/TempNav';
import PostFeed from '../components/container/PostFeed';


class HeaderComponent extends Component {
    render() {
        return (
            <Text>
                dasf
            </Text>
        )
    }
}

class MainFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            likes: 5
        }
    }

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    _imageLiked = () => {
        if (this.state.liked) {
            this.setState({
                liked: false
            })
        } else {
            this.setState({
                liked: true
            })
        }
    }

    render() {
        return (
            <View style={{ height: '100%' }}>
                {/* <TempNav /> */}
                <PostFeed />
            </View>
        )
    }
}

export default MainFeed;
