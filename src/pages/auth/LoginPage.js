import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar, ImageBackground, Image, TouchableOpacity} from 'react-native';

import bg_img from './sources/bg.png';
import personal_img from '../my/sources/personal.png';
import {Input} from "teaset";
import rectangle from '../home/sources/rectangle.png';

export default class LoginPage extends Component{

    state = {pos: 0, account: '', password: ''};

    render() {
        const {pos} = this.state;
        return (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor={'rgba(255, 255, 255, 0)'} barStyle={'dark-content'}/>

                <ImageBackground source={bg_img} style={{width: __SCREEN_WIDTH__, height: 200 * __MIN_PIXEL__,
                    justifyContent: 'center', alignItems: 'center'}} resizeMode={'stretch'}>

                    <Image source={personal_img} style={{width: 50 * __MIN_PIXEL__, height: 50 * __MIN_PIXEL__}}/>

                    <View style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: (200 * __MIN_PIXEL__ - 50 * __MIN_PIXEL__) / 2, flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => {
                            this.setState({pos: 0});
                        }} style={{flex: 1}}>
                            <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
                                <View style={{padding: 11 * __MIN_PIXEL__,
                                    borderBottomWidth: pos === 0 ? 2 : 0, borderColor: '#FF8352'}}>
                                    <Text style={{fontSize: 18, color: '#333333'}}>登陆</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            this.setState({pos: 1});
                        }} style={{flex: 1}}>
                            <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
                                <View style={{padding: 11 * __MIN_PIXEL__,
                                    borderBottomWidth: pos === 1 ? 2 : 0, borderColor: '#FF8352'}}>
                                    <Text style={{fontSize: 18, color: '#666666'}}>注册</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>

                {
                    pos === 0 ? this._renderLoginView() : this._renderRegister()
                }

            </View>
        );
    }

    _renderLoginView = () => {
        return (
            <View style={{flex: 1, backgroundColor: '#F9F9F9', paddingTop: 47 * __MIN_PIXEL__}}>
                <View style={{width: 336 * __MIN_PIXEL__, height: 44 * __MIN_PIXEL__, backgroundColor: 'white', flexDirection: 'row',
                    alignSelf: 'center', alignItems: 'center'}}>
                    <Text style={{marginLeft: 26 * __MIN_PIXEL__, fontSize: 14, color: '#666666'}}>账号</Text>
                    <Input
                        style={{width: 150 * __MIN_PIXEL__, backgroundColor: 'white', borderWidth: 0, marginLeft: 30}}
                        value={this.state.account}
                        placeholder={'手机号'}
                        onChangeText={text => this.setState({account: text})}
                    />
                </View>

                <View style={{width: 336 * __MIN_PIXEL__, height: __PIXEL__, backgroundColor: '#E7E7E7', alignSelf: 'center'}} />

                <View style={{width: 336 * __MIN_PIXEL__, height: 44 * __MIN_PIXEL__, backgroundColor: 'white', flexDirection: 'row',
                    alignSelf: 'center', alignItems: 'center'}}>
                    <Text style={{marginLeft: 26 * __MIN_PIXEL__, fontSize: 14, color: '#666666'}}>密码</Text>
                    <Input
                        style={{width: 150 * __MIN_PIXEL__, backgroundColor: 'white', borderWidth: 0, marginLeft: 30}}
                        value={this.state.password}
                        placeholder={'6-20位字母或者数字'}
                        onChangeText={text => this.setState({password: text})}
                    />
                    <View style={{flex: 1}} />
                    <Text style={{fontSize: 14, color: '#666666', marginRight: 24 * __MIN_PIXEL__}}>忘记密码？</Text>
                </View>

                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('RenzhengPage');
                }}>
                    <ImageBackground source={rectangle} style={{width: 291 * __MIN_PIXEL__, height: 42 * __MIN_PIXEL__, alignSelf: 'center',
                        justifyContent: 'center', alignItems: 'center', marginTop: 35 * __MIN_PIXEL__}}>

                        <Text style={{fontSize: 18, color: 'white'}}>登  陆</Text>

                    </ImageBackground>
                </TouchableOpacity>
            </View>
        );
    };

    _renderRegister = () => {

        return (
            <View style={{flex: 1, backgroundColor: '#F9F9F9', paddingTop: 47 * __MIN_PIXEL__}}>
                <View style={{width: 336 * __MIN_PIXEL__, height: 44 * __MIN_PIXEL__, backgroundColor: 'white', flexDirection: 'row',
                    alignSelf: 'center', alignItems: 'center'}}>
                    <Text style={{marginLeft: 26 * __MIN_PIXEL__, fontSize: 14, color: '#666666'}}>账号</Text>
                    <Input
                        style={{width: 150 * __MIN_PIXEL__, backgroundColor: 'white', borderWidth: 0, marginLeft: 30}}
                        value={this.state.account}
                        placeholder={'手机号'}
                        onChangeText={text => this.setState({account: text})}
                    />
                </View>

                <View style={{width: 336 * __MIN_PIXEL__, height: __PIXEL__, backgroundColor: '#E7E7E7', alignSelf: 'center'}} />

                <View style={{width: 336 * __MIN_PIXEL__, height: 44 * __MIN_PIXEL__, backgroundColor: 'white', flexDirection: 'row',
                    alignSelf: 'center', alignItems: 'center'}}>
                    <Text style={{marginLeft: 26 * __MIN_PIXEL__, fontSize: 14, color: '#666666'}}>验证</Text>
                    <Input
                        style={{width: 100 * __MIN_PIXEL__, backgroundColor: 'white', borderWidth: 0, marginLeft: 30}}
                        value={this.state.account}
                        placeholder={'验证码'}
                        onChangeText={text => this.setState({account: text})}
                    />
                    <View style={{flex: 1}} />
                    <View style={{minWidth: 86 * __MIN_PIXEL__, height: 32 * __MIN_PIXEL__, borderRadius: 5, backgroundColor: '#FF8352',
                        justifyContent: 'center', alignItems: 'center', marginRight: 7 * __MIN_PIXEL__}}>
                        <Text style={{fontSize: 14, color: '#ffffff'}}>获取验证码</Text>
                    </View>
                </View>

                <View style={{width: 336 * __MIN_PIXEL__, height: __PIXEL__, backgroundColor: '#E7E7E7', alignSelf: 'center'}} />

                <View style={{width: 336 * __MIN_PIXEL__, height: 44 * __MIN_PIXEL__, backgroundColor: 'white', flexDirection: 'row',
                    alignSelf: 'center', alignItems: 'center'}}>
                    <Text style={{marginLeft: 26 * __MIN_PIXEL__, fontSize: 14, color: '#666666'}}>密码</Text>
                    <Input
                        style={{width: 150 * __MIN_PIXEL__, backgroundColor: 'white', borderWidth: 0, marginLeft: 30}}
                        value={this.state.password}
                        placeholder={'6-20位字母或者数字'}
                        onChangeText={text => this.setState({password: text})}
                    />
                </View>
                <ImageBackground source={rectangle} style={{width: 291 * __MIN_PIXEL__, height: 42 * __MIN_PIXEL__, alignSelf: 'center',
                    justifyContent: 'center', alignItems: 'center', marginTop: 35 * __MIN_PIXEL__}}>

                    <Text style={{fontSize: 18, color: 'white'}}>注  册</Text>

                </ImageBackground>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        width: __SCREEN_WIDTH__,
        height: __SCREEN_HEIGHT__
    }
});