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

    static navigationOptions = {
        title: 'The War-Pit',
        headerStyle: {
            backgroundColor: '#04396C',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };


    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            likes: 5
        }
    }



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
