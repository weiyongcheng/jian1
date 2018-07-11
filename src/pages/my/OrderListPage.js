import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text, TouchableOpacity,
    Image, ScrollView
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view'
import ScrollableTabBar from 'react-native-scrollable-tab-view/ScrollableTabBar';
import ItemView from "./components/ItemView";
import return_img from '../home/sources/return.png';

export default class OrderListPage extends Component {

    render() {
        const { navigation } = this.props;
        const index = navigation.getParam('index', 0);
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

                        <Text style={{fontSize: 17, color: '#030303'}}>我的订单</Text>
                    </View>
                </View>

                <ScrollableTabView
                    style={{width: __SCREEN_WIDTH__, height: __SCREEN_HEIGHT__ - 65}}
                    initialPage={index}
                    renderTabBar={() => <ScrollableTabBar
                        style={{borderWidth: 0}}
                        backgroundColor={'white'}
                        textStyle={{fontSize: 14}}
                        inactiveTextColor={'#666666'}
                        activeTextColor={'#FF8352'}
                        underlineStyle={{backgroundColor: '#FF8352'}}/>}>

                    <ItemView tabLabel={'已抢单'} statusType={0}/>
                    <ItemView tabLabel={'进行中'} statusType={1}/>
                    <ItemView tabLabel={'已完成'} statusType={2}/>
                    <ItemView tabLabel={'已取消'} statusType={3}/>

                </ScrollableTabView>

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