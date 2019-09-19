import React, { Component } from 'react'
import { Text, View } from 'react-native'
import InstaClone from '../components/InstaClone';
import TempNav from '../components/TempNav';
import UserBar from '../components/ UserBar';
import MainImage from '../components/MainImage';
import IconBar from '../components/IconBar';

export default class Mainscreen extends Component {
    render() {
        return (
            <View>
                <TempNav/>
                <UserBar/>
                <MainImage/>
                <IconBar/>
            </View>
        )
    }
}
