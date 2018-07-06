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

                    <DetailRowCell title={'代取快递'} moneyDesc={'25元'} type={0} callback={() => {this.props.navigation.navigate('DetailPage')}}/>

                    <View style={{width: __SCREEN_WIDTH__, height: 56 * __MIN_PIXEL__, backgroundColor: 'white',
                        flexDirection: 'row', alignItems: 'center', marginVertical: 10 * __MIN_PIXEL__}}>

                        <Image source={fabu_img} style={{width: 12 * __MIN_PIXEL__, height: 12 * __MIN_PIXEL__, marginLeft: 60 * __MIN_PIXEL__}} resizeMode={'stretch'} />
                        <Text style={{fontSize: 12, color: '#666666', marginLeft: 4 * __MIN_PIXEL__}}>发布方已支付</Text>
                        <View style={{flex: 1}} />
                        <Text style={{fontSize: 14, color: '#ff8352', marginRight: 24 * __MIN_PIXEL__}}>24元</Text>

                    </View>

                    <View style={{width: __SCREEN_WIDTH__, height: 56 * __MIN_PIXEL__, backgroundColor: 'white',
                        marginTop: 10 * __MIN_PIXEL__, paddingLeft: 16 * __MIN_PIXEL__, justifyContent: 'center'}}>

                        <Text style={{fontSize: 12, color: '#999999'}}>下单时间：2017-06-30 12:00:00</Text>
                        <Text style={{fontSize: 12, color: '#999999', marginTop: 4 * __MIN_PIXEL__}}>订单编号：12000201806301234</Text>

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