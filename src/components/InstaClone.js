import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class InstaClone extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'column',
                borderWidth: 3,
                borderColor: 'red',
                height: '100%',
                // width: '100%'
            }}>
                <Image style={{
                    resizeMode: 'cover',
                    height: '50%',
                    width: '100%',
                    justifyContent: 'center'
                }}
                    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/rn-instagramclone.appspot.com/o/puppy.png?alt=media&token=a7b798e1-fd04-41a2-aeb1-1b6646b9da61' }} />
            </View>
        )
    }
}
