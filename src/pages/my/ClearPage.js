import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text, TouchableOpacity,
    Image, ScrollView, ImageBackground, ActivityIndicator,
} from 'react-native';

import return_img from '../home/sources/return.png';
import {Input, Toast, Theme} from "teaset";
import rectangle from '../home/sources/rectangle.png';
import clear_img from './sources/clear.png';

export default class ClearPage extends Component {

    state = {value: '16M'};

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

                        <Text style={{fontSize: 17, color: '#030303'}}>清理缓存</Text>
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} style={{width: __SCREEN_WIDTH__, height: __SCREEN_HEIGHT__}}>

                    {this._renderTitleView()}

                    <ImageBackground source={rectangle} style={{width: __SCREEN_WIDTH__, height: 190 * __MIN_PIXEL__,
                        justifyContent: 'center', alignItems: 'center'}}>
                        <ImageBackground source={clear_img} style={{width: 153 * __MIN_PIXEL__, height: 153 * __MIN_PIXEL__,
                            justifyContent: 'center', alignItems: 'center'}}>

                            <Text style={{fontSize: 20, color: '#ffffff'}}>{this.state.value}</Text>
                            <Text style={{fontSize: 10, color: '#ffffff', marginTop: 5 * __MIN_PIXEL__}}>当前缓存</Text>

                        </ImageBackground>
                    </ImageBackground>

                    <TouchableOpacity activeOpacity={1}
                        onPress={() => {

                            Toast.show({
                                text: '请稍后',
                                icon: <ActivityIndicator size='large' color={Theme.toastIconTintColor} />,
                                duration: 2000,
                            });

                            setTimeout(() => {
                                Toast.smile('清理成功');
                                this.setState({value: '0M'})
                            }, 2500)
                        }}>
                        <ImageBackground source={rectangle} style={{width: 291 * __MIN_PIXEL__, height: 42 * __MIN_PIXEL__, alignSelf: 'center',
                            justifyContent: 'center', alignItems: 'center', marginTop: 21 * __MIN_PIXEL__}}>

                            <Text style={{fontSize: 18, color: '#ffffff'}}>清理缓存</Text>

                        </ImageBackground>
                    </TouchableOpacity>


                </ScrollView>

            </View>



        );
    }

    _renderTitleView = () => {
        return (
            <View style={{width: __SCREEN_WIDTH__, height: 10 * __MIN_PIXEL__, backgroundColor: '#f9f9f9'}}>
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