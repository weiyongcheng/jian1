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

export default class GengduoPage extends Component {

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

                            <Text style={{fontSize: 17, color: '#030303'}}>更多兼职</Text>
                        </View>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} style={{width: __SCREEN_WIDTH__, height: __SCREEN_HEIGHT__}}>

                    {this._renderTitleView()}

                    <JianzhiRowCell title={'代取快递'} moneyDesc={'25元'} type={0}/>
                    <JianzhiRowCell title={'代取快递'} moneyDesc={'25元'} type={1}/>
                    <JianzhiRowCell title={'代取快递'} moneyDesc={'25元'} type={2}/>
                    <JianzhiRowCell title={'代取快递'} moneyDesc={'25元'} type={0}/>
                    <JianzhiRowCell title={'代取快递'} moneyDesc={'25元'} type={1}/>
                    <JianzhiRowCell title={'代取快递'} moneyDesc={'25元'} type={2}/>

                    </ScrollView>

                </View>



        );
    }

    _renderTitleView = () => {
        return (
            <View style={{width: __SCREEN_WIDTH__, height: 10 * __MIN_PIXEL__, backgroundColor: '#f9f9f9'}} />
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