import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';

import fujinjianzhi_img from '../sources/fujinjianzhi.png';
import duanqijianzhi from '../sources/duanqijianzhi.png';
import kuaijiejianzhi from '../sources/kuaijiejianzhi.png';
import remenjianzhi from '../sources/remenjiainzhi.png';
import gengduo_img from '../sources/gengduo.png';
import dingwei_img from '../sources/dingwei.png';
import shijian_img from '../sources/shijian.png';
import yiqiangdan_biao from '../sources/yiqiangdan_biao.png';
import jinxingzhong_biao from '../sources/jinxingzhong_biao.png';
import yiwancheng_biao from '../sources/yiwancheng_biao.png';
import yiquxiao_biao from '../sources/yiquxiao_biao.png';

export default class ListRowCell extends Component{

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

    _getStatusImage = () => {
        const {statusType = 0} = this.props;
        switch (Number(statusType)) {
            case 0:
                return yiqiangdan_biao;
            case 1:
                return jinxingzhong_biao;
            case 2:
                return yiwancheng_biao;
            case 3:
                return yiquxiao_biao;
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

                    <Image source={this._getStatusImage()} style={{width: 72 * __MIN_PIXEL__, height: 54 * __MIN_PIXEL__,
                        position: 'absolute', right: 23, bottom: 13}} />
                </View>
            </TouchableOpacity>

        );
    }

    _renderContent = () => {

        return (
            <View style={{width: __SCREEN_WIDTH__, flex: 1, paddingLeft: 60 * __MIN_PIXEL__, paddingRight: 24 * __MIN_PIXEL__, justifyContent: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={dingwei_img} style={{width: 7, height: 9}} resizeMode={'stretch'} />
                        <Text style={{fontSize: 10, color: '#999999', marginLeft: 7}}>上城区/3.2km</Text>
                    </View>

                    <View style={{marginTop: 5}}>
                        <Text style={{fontSize: 12, color: '#666666'}} numberOfLines={2}>dsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdfdsfsddsfsdf</Text>
                    </View>

                    <View style={{flexDirection: 'row', marginTop: 5 * __MIN_PIXEL__, alignItems: 'center'}}>
                        <Image source={shijian_img} style={{width: __MIN_PIXEL__ * 11, height: __MIN_PIXEL__ * 11}} />
                        <Text style={{fontSize: 12, color: '#999999', marginLeft: 5}}>时间：2018-07-15～2018-08-15</Text>
                    </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({

   container: {
       width: __SCREEN_WIDTH__,
       height: 150 * __MIN_PIXEL__,
       backgroundColor: 'white',
       marginBottom: 10
   }
});