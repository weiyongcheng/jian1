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
                    <ImageBackground source={all_img} style={{width: __SCREEN_WIDTH__, height: 101 * __MIN_PIXEL__, marginBottom: 11 * __MIN_PIXEL__}} resizeMode={'stretch'}>
                    </ImageBackground>

                    <JianzhiRowCell title={'代取快递'} moneyDesc={'25元'} type={0}/>
                    <JianzhiRowCell title={'代取快递'} moneyDesc={'25元'} type={1}/>
                    <JianzhiRowCell title={'代取快递'} moneyDesc={'25元'} type={2}/>
                    <JianzhiRowCell title={'代取快递'} moneyDesc={'25元'} type={0}/>
                    <JianzhiRowCell title={'代取快递'} moneyDesc={'25元'} type={1}/>
                    <JianzhiRowCell title={'代取快递'} moneyDesc={'25元'} type={2}/>
                    <JianzhiRowCell title={'代取快递'} moneyDesc={'25元'} type={0}/>
                    <JianzhiRowCell title={'代取快递'} moneyDesc={'25元'} type={1}/>
                    <JianzhiRowCell title={'代取快递'} moneyDesc={'25元'} type={2}/>

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