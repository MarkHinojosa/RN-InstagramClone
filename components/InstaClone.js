import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class InstaClone extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'column', borderColor: 'red', borderWidth: 3, height: '100%', width: '100%' }}>
                <View style={{justifyContent:'center', margin:10}}>
                    <Text style={{textAlign:'center'}}>Instagram</Text>
                </View>
                <View style={{ flexDirection: 'row', borderColor: 'yellow', borderWidth: 3 }}>
                    {/* <Image/> */}
                    <Text> MarkH </Text>
                    <Text>...</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Image style={{ resizeMode: 'stretch', height: '50%', width: '100%', justifyContent: 'center' }} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/rn-instagramclone.appspot.com/o/puppy.png?alt=media&token=a7b798e1-fd04-41a2-aeb1-1b6646b9da61' }} />
                </View>
            </View>
        )
    }
}
