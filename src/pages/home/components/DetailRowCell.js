import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';

import fujinjianzhi_img from '../sources/fujinjianzhi.png';
import duanqijianzhi from '../sources/duanqijianzhi.png';
import kuaijiejianzhi from '../sources/kuaijiejianzhi.png';
import remenjianzhi from '../sources/remenjiainzhi.png';
import gengduo_img from '../sources/gengduo.png';
import dingwei_img from '../sources/dingwei.png';
import shijian_img from '../sources/shijian.png';
import daijiedan_img from '../sources/daijiedan.png';
import personal_img from '../sources/personal.png';
import phone_img from '../sources/phone.png';

export default class DetailRowCell extends Component{

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
        const {title} = this.props;
        return (
            <View style={[styles.container, this.props.style]}>
                <View style={{width: __SCREEN_WIDTH__, height: 45 * __MIN_PIXEL__, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={this._getImage()} style={{width: 28 * __MIN_PIXEL__, height: 28 * __MIN_PIXEL__, marginLeft: 16}} />
                    <Text style={{fontSize: 14, color: '#333333', marginLeft: 16}}>{title}</Text>
                    <View style={{flex: 1}} />
                    <Image source={daijiedan_img} style={{width: 38 * __MIN_PIXEL__, height: 38 * __MIN_PIXEL__, position: 'absolute',
                        top: 0, right: 0}} />
                </View>

                {this._renderContent()}
            </View>
        );
    }

    _renderContent = () => {

        const {posDesc = '', contentDesc = '', timeDesc = '', name = '', phone = ''} = this.props;

        return (
            <View style={{width: __SCREEN_WIDTH__, flex: 1, }}>
                <View style={{justifyContent: 'space-around', flex: 1, paddingLeft: 60 * __MIN_PIXEL__, paddingRight: 24 * __MIN_PIXEL__}}>
                    <View style={{flexDirection: 'row', marginTop: 12 * __MIN_PIXEL__, alignItems: 'center'}}>
                        <Image source={dingwei_img} style={{width: 7, height: 9}} resizeMode={'stretch'} />
                        <Text style={{fontSize: 10, color: '#999999', marginLeft: 7}}>{posDesc}</Text>
                    </View>

                    <View style={{marginTop: 2}}>
                        <Text style={{fontSize: 12, color: '#666666'}} numberOfLines={2}>{contentDesc}</Text>
                    </View>

                    <View style={{flexDirection: 'row', marginTop: 2 * __MIN_PIXEL__, alignItems: 'center'}}>
                        <Image source={shijian_img} style={{width: __MIN_PIXEL__ * 11, height: __MIN_PIXEL__ * 11}} />
                        <Text style={{fontSize: 10, color: '#999999', marginLeft: 5}}>{timeDesc}</Text>
                    </View>

                </View>

                <View style={{width: __SCREEN_WIDTH__, height: 47 * __MIN_PIXEL__, flexDirection: 'row',
                    alignItems: 'center'}}>

                    <View style={{width: __SCREEN_WIDTH__ - 60 * __MIN_PIXEL__, position: 'absolute', top: 0,
                        height: __PIXEL__, marginLeft: 60 * __MIN_PIXEL__, backgroundColor: '#e7e7e7'}} />

                    <Image source={personal_img} style={{width: 26 * __MIN_PIXEL__, height: 26 * __MIN_PIXEL__, marginLeft: 17 * __MIN_PIXEL__}} resizeMode={'stretch'} />
                    <Text style={{marginLeft: 26 * __MIN_PIXEL__, fontSize: 12, color: '#666666'}}>{name}  {phone}</Text>
                    <View style={{flex: 1}} />
                    <Image source={phone_img} style={{width: 16 * __MIN_PIXEL__, height: 16 * __MIN_PIXEL__, marginRight: 28 * __MIN_PIXEL__}} resizeMode={'stretch'} />
                </View>
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