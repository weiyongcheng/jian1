import React, {Component} from 'react';
import {Image, View, AsyncStorage, NativeModules, Dimensions} from 'react-native';

const {SplashScreen, OrientationNotice} = NativeModules;
import userMobx from '../mobx/UserMobx';

export default class Splash extends Component {

    state = {isShowHongbao: false};

    componentDidMount() {

        // this._clear()
        AsyncStorage.getItem(__KEYS__.IS_LOGIN).then(res => {
            if (res === 'true' || res === true) {
                AsyncStorage.getItem(__KEYS__.IS_AUDIT).then(res => {
                    if (res === 'true' || res === true) {
                        AsyncStorage.getItem(__KEYS__.USER_NAME).then(res => {
                            userMobx.setDatas({phone: res});
                        }).catch(err => {});
                        this._goPage();
                    } else {
                        this._goWaiting()
                    }
                }).catch(err => {
                    this._goAuth();
                })
            } else {
                this._goAuth();
            }
        }).catch(err => {
            this._goAuth();
        });
    }

    _goAuth = () => {
        setTimeout(() => {
            SplashScreen && SplashScreen.hide();
            const {navigation} = this.props;
            navigation && navigation.replace('LoginPage');
        }, 500);
    };

    _goWaiting = () => {
        setTimeout(() => {
            SplashScreen && SplashScreen.hide();
            const {navigation} = this.props;
            navigation && navigation.replace('WaitingPage');
        }, 500);
    };

    _goPage = () => {
        setTimeout(() => {
            SplashScreen && SplashScreen.hide();
            const {navigation} = this.props;
            navigation && navigation.replace('App');
        }, 500);
    };

    _clear = () => {

        AsyncStorage.setItem(__KEYS__.IS_LOGIN, 'false').catch(err => {})
        AsyncStorage.setItem(__KEYS__.IS_AUDIT, 'false').catch(err => {})
    };

    render() {
        const {isShowHongbao} = this.state;
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
            </View>

        );
    }
}
