import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';

import fujinjianzhi_img from '../sources/fujinjianzhi.png';
import duanqijianzhi from '../sources/duanqijianzhi.png';
import kuaijiejianzhi from '../sources/kuaijiejianzhi.png';
import remenjianzhi from '../sources/remenjiainzhi.png';
import gengduo_img from '../sources/gengduo.png';
import dingwei_img from '../sources/dingwei.png';
import shijian_img from '../sources/shijian.png';
import rectangle_img from '../sources/rectangle.png';

export default class JianzhiRowCell extends Component{

    _getImage = () => {
        const {type = 0} = this.props;
        switch (Number(type)) {
            case 0:
                return fujinjianzhi_img;
            case 1:
                return duanqijianzhi;
            case 2:
                return kuaijiejianzhi;
            case 3:
                return remenjianzhi;
            case 4:
                return gengduo_img;
        }
    };

    render() {
        const {title, moneyDesc} = this.props;
        return (
            <TouchableOpacity onPress={() => {
                const {callback} = this.props;
                callback && callback();
            }}>
                <View style={[styles.container, this.props.style]}>
                    <View style={{width: __SCREEN_WIDTH__, height: 45 * __MIN_PIXEL__, flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={this._getImage()} style={{width: 28 * __MIN_PIXEL__, height: 28 * __MIN_PIXEL__, marginLeft: 16}} />
                        <Text style={{fontSize: 14, color: '#333333', marginLeft: 16}}>{title}</Text>
                        <View style={{flex: 1}} />
                        <Text style={{fontSize: 14, color: '#FF8352', marginRight: 24 * __MIN_PIXEL__}}>{moneyDesc}</Text>
                    </View>

                    <View style={{height: __PIXEL__, width: __SCREEN_WIDTH__, backgroundColor: '#E7E7E7'}} />

                    {this._renderContent()}
                </View>
            </TouchableOpacity>

        );
    }

    _renderContent = () => {

        return (
            <View style={{width: __SCREEN_WIDTH__, flex: 1, paddingLeft: 60 * __MIN_PIXEL__, paddingRight: 24 * __MIN_PIXEL__}}>
                <View style={{justifyContent: 'space-around', flex: 1}}>
                    <View style={{flexDirection: 'row', marginTop: 12 * __MIN_PIXEL__, alignItems: 'center'}}>
                        <Image source={dingwei_img} style={{width: 7, height: 9}} resizeMode={'stretch'} />
                        <Text style={{fontSize: 10, color: '#999999', marginLeft: 7}}>上城区/3.2km</Text>
                    </View>

                    <View style={{marginTop: 2}}>
                        <Text style={{fontSize: 12, color: '#666666'}} numberOfLines={2}>dsfsddsfsdf</Text>
                    </View>

                    <View style={{flexDirection: 'row', marginTop: 2 * __MIN_PIXEL__, alignItems: 'center'}}>
                        <Image source={shijian_img} style={{width: __MIN_PIXEL__ * 11, height: __MIN_PIXEL__ * 11}} />
                        <Text style={{fontSize: 10, color: '#999999', marginLeft: 5}}>时间：2018-07-15～2018-08-15</Text>
                    </View>
                </View>


                <ImageBackground source={rectangle_img} style={{width: 291 * __MIN_PIXEL__, height: 42 * __MIN_PIXEL__,
                    marginBottom: 14 * __MIN_PIXEL__, justifyContent: 'center', alignItems: 'center', marginTop: 13 * __MIN_PIXEL__ }} resizeMode={'stretch'}>
                    <Text style={{fontSize: 18, color: '#ffffff'}}>我要赚钱</Text>
                </ImageBackground>
            </View>
        );
    };
}

const styles = StyleSheet.create({

   container: {
       width: __SCREEN_WIDTH__,
       height: 202 * __MIN_PIXEL__,
       backgroundColor: 'white',
       marginBottom: 10
   }
});