import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import config from '../config';

export default class UserBar extends Component {
    render() {
        return (
            <View style={styles.userBarContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={styles.profilePic}
                        source={{
                            uri: "https://firebasestorage.googleapis.com/v0/b/rn-instagramclone.appspot.com/o/mark%26Ali.jpg?alt=media&token=1281cc55-d7ed-48f6-ba5a-b127b4fd9cee"
                        }}
                    />
                    <Text style={{ marginLeft: 10 }}> MarkH </Text>
                </View>
                <Text style={{ fontSize: 20 }}>...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    profilePic: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    userBarContainer: {
        flex:1,
        height: 100 + '%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginVertical: 10
    }
})

