import React, { Component } from 'react'
import { Text, View } from 'react-native'
import InstaClone from '../components/InstaClone';
import TempNav from '../components/TempNav';
import PostFeed from '../components/container/PostFeed';

export default class Mainscreen extends Component {
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
                <TempNav />
                <PostFeed />
            </View>
        )
    }
}
