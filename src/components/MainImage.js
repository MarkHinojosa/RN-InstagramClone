import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class MainImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.mainImageContainer}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => this.props.imageLiked()}
                >
                    <Image style={styles.mainImage}
                        source={{ uri: this.props.source }} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainImageContainer: {
        flexDirection: 'column',
        borderWidth: StyleSheet.hairlineWidth,
        height: 350,
        width: '100%',
    },
    mainImage: {
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
        justifyContent: 'center'
    }
})