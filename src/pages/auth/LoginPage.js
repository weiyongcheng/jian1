import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar, ImageBackground, Image, TouchableOpacity, AsyncStorage, Keyboard} from 'react-native';

import bg_img from './sources/bg.png';
import personal_img from '../my/sources/personal.png';
import {Input, Theme, Toast} from "teaset";
import rectangle from '../home/sources/rectangle.png';
import RegexUtil from '../../utils/RegexUtil';
import PageDecorator from '../../components/pageDecorator/PageDecorator';

@PageDecorator
export default class LoginPage extends Component{

    static xgNavigationBarOptions = {
        hideNavBar: true,
    };

    state = {pos: 0, account: '', password: '', regisPhone: '', regisPassword: '', regisCode: ''};

    _register = () => {

        const telPhoneResult = RegexUtil.checkTelPhone(this.state.regisPhone);
        if (!telPhoneResult.ok) {
            this.xg_toastShow(telPhoneResult.errorTitle);
            return;
        }

        const codeResult = RegexUtil.checkVerificationCode(this.state.regisCode);
        if (!codeResult.ok) {
            this.xg_toastShow(codeResult.errorTitle);
            return;
        }

        const pwdResult = RegexUtil.checkPassword(this.state.regisPassword);
        if (!pwdResult.ok) {
            this.xg_toastShow(pwdResult.errorTitle);
            return;
        }

        Keyboard.dismiss();
        this.xg_loadingShow('注册中');
        setTimeout(() => {
            this.xg_loadingDismiss();
            if (this.state.regisPhone === '18768477921') {
                this.xg_toastShow('手机号已经注册');
            } else {
                this.xg_toastShow('验证码错误');
            }
        }, 1500 + Math.random() * 1000)
    };

    _Login = () => {
        const account = this.state.account;
        const password = this.state.password;

        //check account
        const telPhoneResult = RegexUtil.checkTelPhone(account);
        if (!telPhoneResult.ok){
            this.xg_toastShow(telPhoneResult.errorTitle);
            return;
        }
        //check password
        const pwdResult = RegexUtil.checkPassword(password);
        if (!pwdResult.ok){
            this.xg_toastShow(pwdResult.errorTitle);
            return;
        }

        Keyboard.dismiss();
        this.xg_loadingShow('登陆中');
        if (account === '18768477921' && password === 'qaz123456') {
            setTimeout(() => {
                this.xg_loadingDismiss();
                this.xg_toastShow('登陆成功');
                Promise.all(AsyncStorage.setItem(__KEYS__.IS_LOGIN, 'true'), AsyncStorage.setItem(__KEYS__.IS_AUDIT, 'true')).then(() => {
                    const {navigation} = this.props;
                    navigation && navigation.replace('App');
                }).catch(err => {
                    const {navigation} = this.props;
                    navigation && navigation.replace('App');
                })
            }, 1500)
        } else if (account === '18768477921'){
            setTimeout(() => {
                this.xg_loadingDismiss();
                this.xg_toastShow('账号或密码错误');
            }, 1500)
        } else {
            setTimeout(() => {
                this.xg_loadingDismiss();
                this.xg_toastShow('账号不存在');
            }, 1500)
        }

        // this.props.navigation.navigate('RenzhengPage');
    };

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
                        secureTextEntry={true}
                        placeholder={'8-20位字母或者数字'}
                        onChangeText={text => this.setState({password: text})}
                    />
                    <View style={{flex: 1}} />
                    <Text style={{fontSize: 14, color: '#666666', marginRight: 24 * __MIN_PIXEL__}}>忘记密码？</Text>
                </View>

                <TouchableOpacity onPress={() => {
                    this._Login();
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
                        value={this.state.regisPhone}
                        placeholder={'手机号'}
                        onChangeText={text => this.setState({regisPhone: text})}
                    />
                </View>

                <View style={{width: 336 * __MIN_PIXEL__, height: __PIXEL__, backgroundColor: '#E7E7E7', alignSelf: 'center'}} />

                <View style={{width: 336 * __MIN_PIXEL__, height: 44 * __MIN_PIXEL__, backgroundColor: 'white', flexDirection: 'row',
                    alignSelf: 'center', alignItems: 'center'}}>
                    <Text style={{marginLeft: 26 * __MIN_PIXEL__, fontSize: 14, color: '#666666'}}>验证</Text>
                    <Input
                        style={{width: 100 * __MIN_PIXEL__, backgroundColor: 'white', borderWidth: 0, marginLeft: 30}}
                        value={this.state.regisCode}
                        secureTextEntry={true}
                        placeholder={'验证码'}
                        onChangeText={text => this.setState({regisCode: text})}
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
                        value={this.state.regisPassword}
                        placeholder={'8-20位字母或者数字'}
                        onChangeText={text => this.setState({regisPassword: text})}
                    />
                </View>

                <TouchableOpacity onPress={() => {
                    this._register();
                }}>
                    <ImageBackground source={rectangle} style={{width: 291 * __MIN_PIXEL__, height: 42 * __MIN_PIXEL__, alignSelf: 'center',
                        justifyContent: 'center', alignItems: 'center', marginTop: 35 * __MIN_PIXEL__}}>

                        <Text style={{fontSize: 18, color: 'white'}}>注  册</Text>

                    </ImageBackground>
                </TouchableOpacity>
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