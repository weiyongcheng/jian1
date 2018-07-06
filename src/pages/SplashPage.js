import React, {Component} from 'react';
import {Image, View, AsyncStorage, NativeModules, Dimensions} from 'react-native';

const {SplashScreen, OrientationNotice} = NativeModules;

export default class Splash extends Component {

    state = {isShowHongbao: false};

    componentDidMount() {
        this._goPage();
    }

    _goPage = () => {
        setTimeout(() => {
            SplashScreen && SplashScreen.hide();
            const {navigation} = this.props;
            navigation && navigation.replace('App');
        }, 500);
    };

    render() {
        const {isShowHongbao} = this.state;
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
            </View>

        );
    }
}
