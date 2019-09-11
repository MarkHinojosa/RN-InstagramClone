import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class InstaClone extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'column', borderColor: 'red', borderWidth: 3, justifyContent: 'center'}}>
                <View>
                    {/* <Image/> */}
                    <Text> MarkH </Text>
                    <Text>...</Text>
                </View>
                <Image style={{ resizeMode: 'contain', height: '100%', width: '100%', justifyContent: 'center', imageResizeMode: 'contain' }} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/rn-instagramclone.appspot.com/o/puppy.png?alt=media&token=a7b798e1-fd04-41a2-aeb1-1b6646b9da61' }} />
            </View>
        )
    }
}
