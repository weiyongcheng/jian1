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
import duanqi_img from './sources/duanqi.png';
import kuaijie_img from './sources/kuaijie.png';

export default class KuaijiePage extends Component {

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

                            <Text style={{fontSize: 17, color: '#030303'}}>快结兼职</Text>
                        </View>
                    </View>


                    <ScrollView showsVerticalScrollIndicator={false} style={{width: __SCREEN_WIDTH__, height: __SCREEN_HEIGHT__}}>

                        <Image source={kuaijie_img} style={{width: __SCREEN_WIDTH__, height: 120 * __MIN_PIXEL__}} resizeMode={'stretch'} />

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