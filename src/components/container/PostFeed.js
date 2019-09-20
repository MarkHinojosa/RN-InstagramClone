import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import Post from '../presentation/Post'

export default class PostFeed extends Component {

    _renderPost = ({item}) => {
        return <Post item={item}/>
    }

    _keyExtractor = (item, index) => {
        return item.toString();
    }

    render() {
        return (
            <FlatList
                data={[1, 2, 3, 4, 5]}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderPost}
            />
        )
    }
}
