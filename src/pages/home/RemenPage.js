import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text, TouchableOpacity,
    Image, ScrollView,
    StatusBar, ImageBackground,
} from 'react-native';

import dingwei_img from './sources/dingwei.png';
import JianzhiRowCell from "./components/JianzhiRowCell";
import return_img from './sources/return.png';
import kuaijie_img from './sources/kuaijie.png';
import remen_img from './sources/remen.png';

export default class RemenPage extends Component {

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

                            <Text style={{fontSize: 17, color: '#030303'}}>热门兼职</Text>
                        </View>
                    </View>


                    <ScrollView showsVerticalScrollIndicator={false} style={{width: __SCREEN_WIDTH__, height: __SCREEN_HEIGHT__}}>

                        <Image source={remen_img} style={{width: __SCREEN_WIDTH__, height: 120 * __MIN_PIXEL__}} resizeMode={'stretch'} />

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

                    </ScrollView>

                </View>



        );
    }

    _renderTitleView = () => {
        return (
            <View style={{width: __SCREEN_WIDTH__, height: 37 * __MIN_PIXEL__, backgroundColor: '#f9f9f9', flexDirection: 'row', alignItems: 'center'}}>
                <Image source={dingwei_img} style={{width: 8 * __MIN_PIXEL__, height: 11 * __MIN_PIXEL__, marginLeft: 8}} resizeMode={'stretch'}  />
                <Text style={{fontSize: 12, color: '#999999', marginLeft: 6}}>浙江省杭州市</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        width: __SCREEN_WIDTH__,
        flex: 1,
        backgroundColor: '#f9f9f9'
    },

});