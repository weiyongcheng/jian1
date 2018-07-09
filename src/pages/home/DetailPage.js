import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text, TouchableOpacity,
    Image, ScrollView,
    StatusBar, ImageBackground,
} from 'react-native';

import return_img from './sources/return.png';
import DetailRowCell from "./components/DetailRowCell";
import fabu_img from './sources/fabu.png';

export default class DetailPage extends Component {

    render() {

        const { navigation } = this.props;
        const type = navigation.getParam('type', '0');
        const title = navigation.getParam('title', '');
        const moneyDesc = navigation.getParam('moneyDesc', '');
        const posDesc = navigation.getParam('posDesc', '');
        const contentDesc = navigation.getParam('contentDesc', '');
        const timeDesc = navigation.getParam('timeDesc', '');
        const name = navigation.getParam('name', '');
        const phone = navigation.getParam('phone', '');
        const orderTime = navigation.getParam('orderTime', '');
        const orderNo = navigation.getParam('orderNo', '');

        return (
            <View style={styles.container}>
                <View style={{width: __SCREEN_WIDTH__, height: 65, backgroundColor: 'white'}}>
                    <View style={{flex: 1, height: 20}}/>
                    <View style={{width: __SCREEN_WIDTH__, height: 45, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.pop();
                        }} style={{position: 'absolute', alignSelf: 'center', left: 9}}>
                            <Image source={return_img} style={{
                                width: 13 * __MIN_PIXEL__, height: 21 * __MIN_PIXEL__
                            }}/>
                        </TouchableOpacity>

                        <Text style={{fontSize: 17, color: '#030303'}}>兼职详情</Text>
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}
                            style={{width: __SCREEN_WIDTH__, height: __SCREEN_HEIGHT__}}>

                    {this._renderTitleView()}

                    <DetailRowCell title={title} moneyDesc={moneyDesc} type={type} timeDesc={timeDesc}
                                   posDesc={posDesc} contentDesc={contentDesc} name={name} phone={phone}/>

                    <View style={{width: __SCREEN_WIDTH__, height: 56 * __MIN_PIXEL__, backgroundColor: 'white',
                        flexDirection: 'row', alignItems: 'center', marginVertical: 10 * __MIN_PIXEL__}}>

                        <Image source={fabu_img} style={{width: 12 * __MIN_PIXEL__, height: 12 * __MIN_PIXEL__, marginLeft: 60 * __MIN_PIXEL__}} resizeMode={'stretch'} />
                        <Text style={{fontSize: 12, color: '#666666', marginLeft: 4 * __MIN_PIXEL__}}>发布方已支付保证金</Text>
                        <View style={{flex: 1}} />
                        <Text style={{fontSize: 14, color: '#ff8352', marginRight: 24 * __MIN_PIXEL__}}>1000元</Text>
                    </View>

                    <View style={{width: __SCREEN_WIDTH__, height: 56 * __MIN_PIXEL__, backgroundColor: 'white',
                        marginTop: 10 * __MIN_PIXEL__, paddingLeft: 16 * __MIN_PIXEL__, justifyContent: 'center'}}>

                        <Text style={{fontSize: 12, color: '#999999'}}>下单时间：{orderTime}</Text>
                        <Text style={{fontSize: 12, color: '#999999', marginTop: 4 * __MIN_PIXEL__}}>订单编号：{orderNo}</Text>

                    </View>

                </ScrollView>

            </View>


        );
    }

    _renderTitleView = () => {
        return (
            <View style={{width: __SCREEN_WIDTH__, height: 10 * __MIN_PIXEL__, backgroundColor: '#f9f9f9'}}/>
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