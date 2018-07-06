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

export default class FankuiPage extends Component {

    state = {value: ''};

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

                        <Text style={{fontSize: 17, color: '#030303'}}>反馈意见</Text>
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} style={{width: __SCREEN_WIDTH__, height: __SCREEN_HEIGHT__}}>

                    {this._renderTitleView()}

                    <Input
                        placeholder={'请填写您宝贵的意见和建议...'}
                        style={{width: __SCREEN_WIDTH__, backgroundColor: '#ffffff', borderRadius: 0, borderWidth: 0, height: 170 * __MIN_PIXEL__, textAlign: 'left'}}
                        value={this.state.value}
                        onChangeText={text => this.setState({value: text})}
                    />

                    <TouchableOpacity activeOpacity={1}
                        onPress={() => {

                            if (this.state.value.length <= 0) {
                                Toast.sad('请先输入内容');
                                return;
                            }

                            Toast.show({
                                text: '提交中',
                                icon: <ActivityIndicator size='large' color={Theme.toastIconTintColor} />,
                                duration: 2000,
                            });

                            setTimeout(() => {
                                Toast.smile('提交成功');
                            }, 2500)
                        }}>
                        <ImageBackground source={rectangle} style={{width: 291 * __MIN_PIXEL__, height: 42 * __MIN_PIXEL__, alignSelf: 'center',
                            justifyContent: 'center', alignItems: 'center', marginTop: 21 * __MIN_PIXEL__}}>

                            <Text style={{fontSize: 18, color: '#ffffff'}}>提  交</Text>

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