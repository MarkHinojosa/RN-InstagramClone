import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Config from '../config';

export default class LikesBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{marginVertical: 10, height: 20, width: "100%", flexDirection: 'row', alignItems: 'center'}}>
                <Image source={Config.images.heartIcon} style={styles.likesHeartIcon} />
                <Text>
                    {this.props.likes} Likes
                </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    likesHeartIcon: {
        marginLeft: 10,
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginHorizontal: 5
    }
})