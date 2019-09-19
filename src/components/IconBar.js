import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Config from '../config';

export default class IconBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const heartColor = this.props.liked ? 'rgb(252,61,57)' : null

        return (
            <View style={styles.iconBarContainer}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => this.props.imageLiked()}>
                    <Image source={Config.images.heartIcon} style={[styles.icon, { tintColor: heartColor }]} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Config.images.speechBubbleIcon} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Config.images.arrowIcon} style={styles.icon} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    iconBarContainer: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'space-around'
    },
    icon: {
        height: 35,
        width: 35,
        resizeMode: 'contain',
        marginHorizontal: 5
    }
})
