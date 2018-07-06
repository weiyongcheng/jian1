import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image, ScrollView,
    StatusBar, ImageBackground,
} from 'react-native';

import tongguo_img from './sources/tongguo.png';

export default class MsgPage extends Component {

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={{width: __SCREEN_WIDTH__, height: 65, backgroundColor: 'white', marginBottom: 10}}>
                        <View style={{flex: 1, height: 20}} />
                        <View style={{width: __SCREEN_WIDTH__, height: 45, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 17, color: '#030303'}}>消息</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <ImageBackground source={tongguo_img} style={{width: __SCREEN_WIDTH__, height: 83 * __MIN_PIXEL__, justifyContent: 'center'}} resizeMode={'stretch'} >
                        <Text style={{fontSize: 24, color: '#ffffff', marginLeft: 53}}>审核通过啦！</Text>
                    </ImageBackground>
                    <View style={{width: __SCREEN_WIDTH__, height: 37, backgroundColor: 'white', justifyContent: 'center'}}>
                        <Text style={{fontSize: 12, color: '#666666', marginLeft: 13}}>您的认证审核通过了，快去找兼职赚钱吧～</Text>
                    </View>
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        width: __MAX_SCREEMT__,
        flex: 1,
        backgroundColor: '#f9f9f9'
    },

});