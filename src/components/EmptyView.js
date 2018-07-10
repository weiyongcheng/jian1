import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import empty_img from './sources/empty.png';

export default class EmptyView extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Image source={empty_img} resizeMode={'stretch'} style={{width: 200, height: 336.0 / 375 * 200}}/>
                <Text style={{fontSize: 16, color: '#666666', marginTop: 36 * __MIN_PIXEL__}}>暂无数据</Text>
            </View>
        );
    }
}