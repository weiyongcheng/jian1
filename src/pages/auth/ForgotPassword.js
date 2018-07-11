import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text, TouchableOpacity,
    Image, ImageBackground, Keyboard
} from 'react-native';

import return_img from '../home/sources/return.png';
import {Input} from "teaset";
import rectangle from '../home/sources/rectangle.png';
import PageDecorator from '../../components/pageDecorator/PageDecorator';
import RegexUtil from "../../utils/RegexUtil";
import LCCountDownButton from "react-native-countdownbutton";
import ApiProvider from "../../logics/ApiProvider";

@PageDecorator
export default class ForgotPassword extends Component {

    static xgNavigationBarOptions = {
        hideNavBar: true,
    };

    state = {regisPhone: '', regisPassword: '', regisCode: ''};

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

                        <Text style={{fontSize: 17, color: '#030303'}}>找回密码</Text>
                    </View>
                </View>

                <View style={{width: __SCREEN_WIDTH__, height: 10 * __MIN_PIXEL__}} />

                {this._renderRegister()}
            </View>
        );
    }

    _renderRegister = () => {

        return (
            <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
                <View style={{
                    width: __SCREEN_WIDTH__,
                    height: 44 * __MIN_PIXEL__,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    alignSelf: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{marginLeft: 26 * __MIN_PIXEL__, fontSize: 14, color: '#666666'}}>账号</Text>
                    <Input
                        style={{width: 150 * __MIN_PIXEL__, backgroundColor: 'white', borderWidth: 0, marginLeft: 30}}
                        value={this.state.regisPhone}
                        placeholder={'手机号'}
                        onChangeText={text => this.setState({regisPhone: text})}
                    />
                </View>

                <View style={{
                    width: __SCREEN_WIDTH__,
                    height: __PIXEL__,
                    backgroundColor: '#E7E7E7',
                    alignSelf: 'center'
                }}/>

                <View style={{
                    width: __SCREEN_WIDTH__,
                    height: 44 * __MIN_PIXEL__,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    alignSelf: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{marginLeft: 26 * __MIN_PIXEL__, fontSize: 14, color: '#666666'}}>验证</Text>
                    <Input
                        style={{width: 100 * __MIN_PIXEL__, backgroundColor: 'white', borderWidth: 0, marginLeft: 30}}
                        value={this.state.regisCode}
                        secureTextEntry={true}
                        placeholder={'验证码'}
                        onChangeText={text => this.setState({regisCode: text})}
                    />
                    <View style={{flex: 1}}/>
                    <LCCountDownButton frameStyle={styles.countDown}
                                       activeTextStyle={{fontSize: 14, color: '#ffffff'}}
                                       beginText='获取验证码'
                                       endText='再次获取验证码'
                                       count={60}
                                       pressAction={() => {
                                           //check account
                                           const telPhoneResult = RegexUtil.checkTelPhone(this.state.regisPhone);
                                           if (!telPhoneResult.ok) {
                                               this.xg_toastShow(telPhoneResult.errorTitle);
                                               return;
                                           }
                                           ApiProvider.randomRequest();
                                           this.countDownButton.startCountDown()
                                       }}
                                       changeWithCount={(count) => count + 's后重新获取'}
                                       id='register'
                                       ref={(e) => {
                                           this.countDownButton = e
                                       }}
                    />

                    {/*<View style={{minWidth: 86 * __MIN_PIXEL__, height: 32 * __MIN_PIXEL__, borderRadius: 5, backgroundColor: '#FF8352',*/}
                    {/*justifyContent: 'center', alignItems: 'center', marginRight: 7 * __MIN_PIXEL__}}>*/}
                    {/*<Text style={{fontSize: 14, color: '#ffffff'}}>获取验证码</Text>*/}
                    {/*</View>*/}
                </View>

                <View style={{
                    width: __SCREEN_WIDTH__,
                    height: __PIXEL__,
                    backgroundColor: '#E7E7E7',
                    alignSelf: 'center'
                }}/>

                <View style={{
                    width: __SCREEN_WIDTH__,
                    height: 44 * __MIN_PIXEL__,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    alignSelf: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{marginLeft: 26 * __MIN_PIXEL__, fontSize: 14, color: '#666666'}}>密码</Text>
                    <Input
                        style={{width: 150 * __MIN_PIXEL__, backgroundColor: 'white', borderWidth: 0, marginLeft: 30}}
                        value={this.state.regisPassword}
                        placeholder={'密码'}
                        onChangeText={text => this.setState({regisPassword: text})}
                    />
                </View>

                <TouchableOpacity onPress={() => {
                    this._register();
                }}>
                    <ImageBackground source={rectangle} style={{
                        width: 291 * __MIN_PIXEL__, height: 42 * __MIN_PIXEL__, alignSelf: 'center',
                        justifyContent: 'center', alignItems: 'center', marginTop: 35 * __MIN_PIXEL__
                    }}>

                        <Text style={{fontSize: 18, color: 'white'}}>提 交</Text>

                    </ImageBackground>
                </TouchableOpacity>
            </View>
        );
    };
}

const styles = StyleSheet.create({

    container: {
        width: __SCREEN_WIDTH__,
        flex: 1,
        backgroundColor: '#f9f9f9'
    },
    countDown: {
        minWidth: 86 * __MIN_PIXEL__,
        height: 32 * __MIN_PIXEL__,
        borderRadius: 5,
        backgroundColor: '#FF8352',
        marginRight: 7 * __MIN_PIXEL__,
        borderWidth: 0
    }
});