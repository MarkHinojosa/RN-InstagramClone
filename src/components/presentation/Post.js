import React, { Component } from 'react'
import { Text, View } from 'react-native'
import TempNav from '../../components/TempNav';
import UserBar from '../../components/ UserBar';
import MainImage from '../../components/MainImage';
import IconBar from '../../components/IconBar';
import LikesBar from '../../components/LikesBar';

export default class Post extends Component {
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
        let id = this.props.item;
        const imageSelection =
        id % 2 === 0
        ? "https://firebasestorage.googleapis.com/v0/b/rn-instagramclone.appspot.com/o/German-Shepherd-Puppy-Fetch.jpg?alt=media&token=6efe3cac-eeb6-459b-9120-8c6cff36755e"
        : 'https://firebasestorage.googleapis.com/v0/b/rn-instagramclone.appspot.com/o/puppy.png?alt=media&token=a7b798e1-fd04-41a2-aeb1-1b6646b9da61'

        return (
            <View style={{flex: 1, height: '100%' }}>
                <UserBar />
                <MainImage imageLiked={this._imageLiked} source={imageSelection} />
                <IconBar imageLiked={this._imageLiked} liked={this.state.liked} />
                <LikesBar likes={this.state.likes} />
            </View>
        )
    }
}