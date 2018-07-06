import React, {Component} from 'react';
import {Image, View, Text} from 'react-native';

import {TabNavigator} from 'react-navigation';

import HomePage from './pages/home/HomePage';
import AllPage from './pages/all/AllPage';
import MsgPage from './pages/msg/MsgPage';
import PersonalPage from './pages/my/MyPage';

import home_img from './sources/home.png';
import home_select_img from './sources/home_select.png';
import all_img from './sources/all.png';
import all_select_img from './sources/all_select.png';
import msg_img from './sources/xiaoxi.png'
import msg_select_img from './sources/xiaoxi_select.png';
import my_select_img from './sources/my_select.png';
import my_img from './sources/my.png';

const tabNavigator = TabNavigator({

    HomePage: {
        screen: HomePage,
        navigationOptions: () => TabOptions('首页', home_img, home_select_img)
    },
    AllPage: {
        screen: AllPage,
        navigationOptions: () => TabOptions('全部兼职', all_img, all_select_img)
    },
    MsgPage: {
        screen: MsgPage,
        navigationOptions: () => TabOptions('消息', msg_img, msg_select_img)
    },
    PersonalPage: {
        screen: PersonalPage,
        navigationOptions: () => TabOptions('个人中心', my_img, my_select_img)
    }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: __ANDROID__,
    animationEnabled: __ANDROID__,
    backBehavior: 'none',
    lazy: true,
    tabBarOptions: {
        tabStyle: {
            justifyContent: 'space-between',
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 5,
            paddingBottom: 5,
            height: 49,
        },
        iconStyle: {
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0,
            paddingBottom: 0,
        },
        labelStyle: {
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0,
            paddingBottom: 0,
            fontSize: 10,
            color: '#666666'
        },
        style: {
            backgroundColor:'#f6f6f6',
            justifyContent: 'center'
        },
        showIcon: true,
        showLabel: true,
        // 不透明度为按选项卡(iOS和Android < 5.0)
        pressOpacity:0.3,
        indicatorStyle :{
            height:0, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了,
        },
    },
});

const TabOptions = (tabBarTitle, normalImage, selectedImage) => {

    const tabBarIcon = ({tintColor, focused}) => (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={!focused ? normalImage : selectedImage} style={{width: 26, height: 26}} resizeMode={'stretch'} />
        </View>
    );

    const tabBarLabel = ({tintColor, focused}) => (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 10, color: focused ? '#f87e28' : '#666666'}} >{tabBarTitle}</Text>
        </View>
    );

    return {
        tabBarLabel,
        tabBarIcon,
    }
};

export default tabNavigator;
