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
import EmptyView from "../../components/EmptyView";

export default class DuanqiPage extends Component {

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

                        <Text style={{fontSize: 17, color: '#030303'}}>短期兼职</Text>
                    </View>
                </View>


                <Image source={duanqi_img} style={{width: __SCREEN_WIDTH__, height: 120 * __MIN_PIXEL__}}
                       resizeMode={'stretch'}/>

                <View style={{flex: 1, alignItems: 'center', paddingTop: 20 * __MIN_PIXEL__}}>
                    <EmptyView/>
                </View>

            </View>


        );
    }

    _renderTitleView = () => {
        return (
            <View style={{
                width: __SCREEN_WIDTH__,
                height: 37 * __MIN_PIXEL__,
                backgroundColor: '#f9f9f9',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Image source={dingwei_img}
                       style={{width: 8 * __MIN_PIXEL__, height: 11 * __MIN_PIXEL__, marginLeft: 8}}
                       resizeMode={'stretch'}/>
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