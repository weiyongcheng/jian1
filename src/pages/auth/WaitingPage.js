import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text, TouchableOpacity,
    Image, ImageBackground
} from 'react-native';

import return_img from '../home/sources/return.png';
import {Input} from "teaset";
import rectangle from '../home/sources/rectangle.png';
import add_img from './sources/add.png';

export default class WaitingPage extends Component {

    state = {name: '', phone: '', idCard: ''};

    render() {
        return (
            <View style={styles.container}>
                <View style={{width: __SCREEN_WIDTH__, height: 65, backgroundColor: 'white'}}>
                    <View style={{flex: 1, height: 20}} />
                    <View style={{width: __SCREEN_WIDTH__, height: 45, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.pop();
                        }} style={{position: 'absolute', alignSelf: 'center', left: 9}}>
                            <Image source={return_img} style={{
                                width: 13 * __MIN_PIXEL__, height: 21 * __MIN_PIXEL__}} />
                        </TouchableOpacity>

                        <Text style={{fontSize: 17, color: '#030303'}}>用户认证</Text>
                    </View>
                </View>

                <View style={{width: __SCREEN_WIDTH__, height: 10 * __MIN_PIXEL__}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        width: __SCREEN_WIDTH__,
        flex: 1,
        backgroundColor: '#f9f9f9'
    },

});