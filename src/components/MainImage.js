import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class MainImage extends Component {
    render() {
        return (
            <View style={styles.mainImageContainer}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => this.props.imageLiked()}
                >
                    <Image style={styles.mainImage}
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/rn-instagramclone.appspot.com/o/puppy.png?alt=media&token=a7b798e1-fd04-41a2-aeb1-1b6646b9da61' }} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainImageContainer: {
        flexDirection: 'column',
        borderWidth: StyleSheet.hairlineWidth,
        height: '65%',
        width: '100%'
    },
    mainImage: {
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
        justifyContent: 'center'
    }
})