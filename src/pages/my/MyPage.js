import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image, ScrollView,
    StatusBar, ImageBackground, TouchableOpacity,
} from 'react-native';

import bg_img from './sources/bg.png';
import personal_img from './sources/personal.png';
import qiangdan_img from './sources/qiangdan.png';
import jinxing_img from './sources/jinxing.png';
import wancheng_img from './sources/wancheng.png';
import quxiao_img from './sources/quxiao.png';
import arrow_img from './sources/arrow.png';
import FankuiPage from "./FankuiPage";
import AboutUsPage from "./AboutUsPage";
import OrderListPage from "./OrderListPage";
import userMobx from '../../mobx/UserMobx';
import {observer} from 'mobx-react/native';

@observer
export default class MyPage extends Component {

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <StatusBar translucent backgroundColor={'rgba(255, 255, 255, 0)'} barStyle={'dark-content'}/>

                    <ImageBackground source={bg_img} style={{
                        width: __SCREEN_WIDTH__, height: 198 * __MIN_PIXEL__,
                        justifyContent: 'center', alignItems: 'center'
                    }} resizeMode={'stretch'}>

                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image source={personal_img}
                                   style={{width: 50 * __MIN_PIXEL__, height: 50 * __MIN_PIXEL__}}/>
                            <View style={{
                                marginTop: 12,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 14,
                                    color: '#444444',
                                    fontWeight: 'bold'
                                }}>{userMobx.data.phone}</Text>
                            </View>
                        </View>

                    </ImageBackground>

                    {this._renderContent()}

                    {this._renderRows()}
                </View>
            </ScrollView>

        );
    }

    _renderContent = () => {

        return (
            <View style={{
                width: __SCREEN_WIDTH__,
                height: 120 * __MIN_PIXEL__,
                backgroundColor: 'white',
                marginBottom: 10
            }}>
                <Text style={{
                    marginLeft: 13 * __MIN_PIXEL__, marginBottom: 21 * __MIN_PIXEL__,
                    marginTop: 11 * __MIN_PIXEL__, fontSize: 18, color: '#333333', fontWeight: 'bold'
                }}>我的订单</Text>
                <View style={{
                    flex: 1,
                    marginBottom: 18 * __MIN_PIXEL__,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('OrderListPage', {
                            index: 0,
                        });
                    }}>
                        <View style={{alignItems: 'center'}}>
                            <Image source={qiangdan_img} style={{width: 30, height: 30}} resizeMode={'stretch'}/>
                            <Text style={{fontSize: 14, color: '#666666', marginTop: 8 * __MIN_PIXEL__}}>已抢单</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('OrderListPage', {
                            index: 1
                        });
                    }}>
                        <View style={{alignItems: 'center'}}>
                            <Image source={jinxing_img} style={{width: 30, height: 30}} resizeMode={'stretch'}/>
                            <Text style={{fontSize: 14, color: '#666666', marginTop: 8 * __MIN_PIXEL__}}>进行中</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('OrderListPage', {
                            index: 2
                        });
                    }}>
                        <View style={{alignItems: 'center'}}>
                            <Image source={wancheng_img} style={{width: 30, height: 30}} resizeMode={'stretch'}/>
                            <Text style={{fontSize: 14, color: '#666666', marginTop: 8 * __MIN_PIXEL__}}>已完成</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('OrderListPage', {
                            index: 3
                        });
                    }}>
                        <View style={{alignItems: 'center'}}>
                            <Image source={quxiao_img} style={{width: 30, height: 30}} resizeMode={'stretch'}/>
                            <Text style={{fontSize: 14, color: '#666666', marginTop: 8 * __MIN_PIXEL__}}>已取消</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        );
    };

    _renderRows = () => {

        return (
            <View>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('FankuiPage');
                }}>
                    <View style={{
                        width: __SCREEN_WIDTH__,
                        height: 44 * __MIN_PIXEL__,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Text style={{fontSize: 14, color: '#666666', marginLeft: 26}}>反馈意见</Text>
                        <View style={{flex: 1}}/>
                        <Image source={arrow_img} style={{
                            width: 8 * __MIN_PIXEL__,
                            height: 13 * __MIN_PIXEL__,
                            marginRight: 16 * __MIN_PIXEL__
                        }}/>
                        <View style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: __PIXEL__,
                            backgroundColor: '#e7e7e7'
                        }}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('ClearPage');
                }}>
                    <View style={{
                        width: __SCREEN_WIDTH__,
                        height: 44 * __MIN_PIXEL__,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Text style={{fontSize: 14, color: '#666666', marginLeft: 26}}>清理缓存</Text>
                        <View style={{flex: 1}}/>
                        <Image source={arrow_img} style={{
                            width: 8 * __MIN_PIXEL__,
                            height: 13 * __MIN_PIXEL__,
                            marginRight: 16 * __MIN_PIXEL__
                        }}/>
                        <View style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: __PIXEL__,
                            backgroundColor: '#e7e7e7'
                        }}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('AboutUsPage');
                }}>
                    <View style={{
                        width: __SCREEN_WIDTH__,
                        height: 44 * __MIN_PIXEL__,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Text style={{fontSize: 14, color: '#666666', marginLeft: 26}}>关于我们</Text>
                        <View style={{flex: 1}}/>
                        <Image source={arrow_img} style={{
                            width: 8 * __MIN_PIXEL__,
                            height: 13 * __MIN_PIXEL__,
                            marginRight: 16 * __MIN_PIXEL__
                        }}/>
                    </View>
                </TouchableOpacity>

            </View>
        );
    };
}

const styles = StyleSheet.create({

    container: {
        width: __MAX_SCREEMT__,
        flex: 1,
        backgroundColor: '#f9f9f9'
    },

});