import React, { Component } from 'react'
import { Text, View } from 'react-native'
import InstaClone from '../components/InstaClone';
import TempNav from '../components/TempNav';
import UserBar from '../components/ UserBar';
import MainImage from '../components/MainImage';
import IconBar from '../components/IconBar';

export default class Mainscreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
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
            <View>
                <TempNav />
                <UserBar />
                <MainImage imageLiked={this._imageLiked} />
                <IconBar imageLiked={this._imageLiked} liked={this.state.liked} />
            </View>
        )
    }
}
