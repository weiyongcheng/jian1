import React, {Component} from 'react';
import {
    StyleSheet,
    View, TouchableOpacity,
    Text, TextInput,
    Image, ScrollView,
    StatusBar, ImageBackground,
} from 'react-native';

import banner_img from './sources/banner.png';
import fujinjianzhi_img from './sources/fujinjianzhi.png';
import duanqijianzhi from './sources/duanqijianzhi.png';
import kuaijiejianzhi from './sources/kuaijiejianzhi.png';
import remenjianzhi from './sources/remenjiainzhi.png';
import gengduo_img from './sources/gengduo.png';
import middle_banner from './sources/middle_banner.png';
import JianzhiRowCell from "./components/JianzhiRowCell";
import down_img from './sources/down.png';
import ApiProvider from "../../logics/ApiProvider";

export default class HomePage extends Component {

    componentDidMount() {
        ApiProvider.randomRequest();
    }

    _onTypePress = (pos) => {
        switch (pos) {
            case 0:
                this.props.navigation.navigate('FujinPage');
                break;
            case 1:
                this.props.navigation.navigate('DuanqiPage');
                break;
            case 2:
                this.props.navigation.navigate('KuaijiePage');
                break;
            case 3:
                this.props.navigation.navigate('RemenPage');
                break;
            case 4:
                this.props.navigation.navigate('GengduoPage');
                break;
        }
    };

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <StatusBar translucent backgroundColor={'rgba(255, 255, 255, 0)'} barStyle={'dark-content'}/>

                    {this._renderBanner()}

                    {this._renderType()}

                    {this._renderMiddleBanner()}

                    {this._renderJianzhiText()}

                    <JianzhiRowCell title={'必胜客宅急送外卖配送（兼职）'} moneyDesc={'120/天'} type={3}
                                    timeDesc={'2018-07-15～2018-9-20'}
                                    posDesc={'江干区'} contentDesc={'浙江省杭州市江干区白杨街道4号大楼503-5号'} callback={() => {
                        this.props.navigation.navigate('DetailPage', {
                            title: '必胜客宅急送外卖配送（兼职）',
                            moneyDesc: '120/天',
                            type: '3',
                            timeDesc: '2018-07-15～2018-9-20',
                            posDesc: '江干区',
                            contentDesc: '浙江省杭州市江干区白杨街道4号大楼503-5号',
                            name: '吴先生',
                            phone: '13233388812',
                            orderTime: '2018-07-09 13:49:56',
                            orderNo: '12000201806301238'
                        })
                    }}/>
                    <JianzhiRowCell title={'招聘暑假兼职工（全家便利店）'} moneyDesc={'100/天'} type={3}
                                    timeDesc={'2018-07-20～2018-8-20'}
                                    posDesc={'上城区'} contentDesc={'浙江省杭州市上城区之江路与飞云江路路口'} callback={() => {
                        this.props.navigation.navigate('DetailPage', {
                            title: '招聘暑假兼职工（全家便利店）',
                            moneyDesc: '100/天',
                            type: '3',
                            timeDesc: '2018-07-20～2018-8-20',
                            posDesc: '上城区',
                            contentDesc: '浙江省杭州市上城区之江路与飞云江路路口',
                            name: '张小姐',
                            phone: '13532145885',
                            orderTime: '2018-07-09 15:21:41',
                            orderNo: '12000201806301328'
                        })
                    }}/>
                    <JianzhiRowCell title={'招聘暑假兼职工（面包店）'} moneyDesc={'70/天'} type={2} timeDesc={'2018-08-10～2018-9-10'}
                                    posDesc={'萧山区'} contentDesc={'浙江省杭州市萧山区萧山经济开发区市心北路126号大成名座 85℃面包店'}
                                    callback={() => {
                                        this.props.navigation.navigate('DetailPage', {
                                            title: '招聘暑假兼职工（面包店）',
                                            moneyDesc: '70/天',
                                            type: '2',
                                            timeDesc: '2018-08-10～2018-9-10',
                                            posDesc: '萧山区',
                                            contentDesc: '浙江省杭州市萧山区萧山经济开发区市心北路126号大成名座 85℃面包店',
                                            name: '王小姐',
                                            phone: '13736195436',
                                            orderTime: '2018-07-11 09:06:03',
                                            orderNo: '12000201806308528'
                                        })
                                    }}/>
                </View>
            </ScrollView>

        );
    }

    _renderBanner = () => {
        return (
            <ImageBackground source={banner_img} style={{width: __SCREEN_WIDTH__, height: 201 * __MIN_PIXEL__}}>
                {/*<View style={{width: __SCREEN_WIDTH__, height: 35 * __MIN_PIXEL__, marginTop: 23 * __MIN_PIXEL__, justifyContent: 'center', alignItems: 'center'}}>*/}
                {/*<View style={{flexDirection: 'row', alignItems: 'center', position: 'absolute', left: 14 * __MIN_PIXEL__, alignSelf: 'center'}}>*/}
                {/*<Text style={{fontSize: 14, color: '#333333'}}>杭州</Text>*/}
                {/*<Image source={down_img} style={{width: 12, height: 12, marginLeft: 2}} />*/}
                {/*</View>*/}
                {/*<View style={{width: 240 * __MIN_PIXEL__, height: 35 * __MIN_PIXEL__, borderRadius: 20 * __MIN_PIXEL__, backgroundColor: 'white', opacity: 0.8}}>*/}
                {/*<TextInput style={{width: 230 * __MIN_PIXEL__, height: 35 * __MIN_PIXEL__, marginLeft: 10 * __MIN_PIXEL__}}*/}
                {/*underlineColorAndroid={'transparent'}*/}
                {/*placeholder={'大家都在搜兼职'}/>*/}
                {/*</View>*/}
                {/*</View>*/}
            </ImageBackground>
        );
    };

    _renderType = () => {
        return (
            <View style={{
                width: __SCREEN_WIDTH__,
                height: 80 * __MIN_PIXEL__,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: '#ffffff'
            }}>
                {
                    [{icon: fujinjianzhi_img, title: '附近兼职'}, {icon: duanqijianzhi, title: '短期兼职'},
                        {icon: kuaijiejianzhi, title: '快结兼职'}, {
                        icon: remenjianzhi,
                        title: '热门兼职'
                    }, {icon: gengduo_img, title: '更多'}]
                        .map((item, index) => {
                            const {icon, title} = item || {};
                            return (
                                <TouchableOpacity onPress={() => this._onTypePress(index)} key={index}>
                                    <View style={{alignItems: 'center'}}>
                                        <Image source={icon}
                                               style={{width: 41 * __MIN_PIXEL__, height: 41 * __MIN_PIXEL__}}/>
                                        <Text style={{
                                            fontSize: 12,
                                            color: '#333333',
                                            marginTop: 7 * __MIN_PIXEL__
                                        }}>{title}</Text>
                                    </View>
                                </TouchableOpacity>

                            );
                        })
                }
            </View>
        );
    };

    _renderMiddleBanner = () => {

        return (
            <Image source={middle_banner} style={{
                width: __SCREEN_WIDTH__ - 15,
                marginLeft: 8, marginRight: 7, height: 80 * __MIN_PIXEL__, marginTop: 10 * __MIN_PIXEL__
            }} resizeMode={'stretch'}/>
        );
    };

    _renderJianzhiText = () => {
        return (
            <Text style={{
                fontSize: 12,
                color: '#999999',
                marginLeft: 16,
                marginTop: 20,
                marginBottom: 10
            }}>热门兼职</Text>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        width: __MAX_SCREEMT__,
        flex: 1,
        backgroundColor: '#f9f9f9'
    },

});