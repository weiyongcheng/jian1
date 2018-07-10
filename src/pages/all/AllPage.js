import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image, ScrollView,
    StatusBar, ImageBackground,
} from 'react-native';

import bg_img from '../home/sources/banner.png';
import JianzhiRowCell from "../home/components/JianzhiRowCell";
import all_img from './sources/all.png';

export default class AllPage extends Component {

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <StatusBar translucent backgroundColor={'rgba(255, 255, 255, 0)'} barStyle={'dark-content'}/>
                    <ImageBackground source={all_img} style={{
                        width: __SCREEN_WIDTH__,
                        height: 101 * __MIN_PIXEL__,
                        marginBottom: 11 * __MIN_PIXEL__
                    }} resizeMode={'stretch'}>
                    </ImageBackground>

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
                    <JianzhiRowCell title={'超市暑假兼职工（超市）'} moneyDesc={'70/天'} type={3} timeDesc={'2018-07-20～2018-8-20'}
                                    posDesc={'下沙区'} contentDesc={'浙江省杭州市江干区下沙经济开发区2号大街物美超市'}
                                    callback={() => {
                                        this.props.navigation.navigate('DetailPage', {
                                            title: '超市暑假兼职工（超市）',
                                            moneyDesc: '70/天',
                                            type: '3',
                                            timeDesc: '2018-07-20～2018-8-20',
                                            posDesc: '下沙区',
                                            contentDesc: '浙江省杭州市江干区下沙经济开发区2号大街物美超市',
                                            name: '王先生',
                                            phone: '13534233812',
                                            orderTime: '2018-07-11 14:21:36',
                                            orderNo: '12000201806300728'
                                        })
                                    }}/>

                </View>
            </ScrollView>
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