import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text, TouchableOpacity,
    Image, ScrollView, AsyncStorage
} from 'react-native';
import {NavigationActions} from 'react-navigation';

import return_img from '../home/sources/return.png';

export default class AboutUsPage extends Component {

    _logout = () => {

        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'LoginPage'}),
            ],
        });

        this.props.navigation.dispatch(resetAction)
    };

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

                        <Text style={{fontSize: 17, color: '#030303'}}>关于我们</Text>
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}
                            style={{width: __SCREEN_WIDTH__, height: __SCREEN_HEIGHT__}}>

                    {this._renderTitleView()}

                    <View style={{
                        width: __SCREEN_WIDTH__,
                        minHeight: 94 * __MIN_PIXEL__,
                        padding: 17 * __MIN_PIXEL__,
                        backgroundColor: 'white'
                    }}>
                        <Text style={{fontSize: 14, color: '#666666', lineHeight: 20}}>
                            我们是一个真实可靠的找兼职平台，我们的兼职信息经过重重审核。我们希望每个同学都能找到合适的兼职工作，获得稳定的收入。
                        </Text>
                    </View>

                    <TouchableOpacity onPress={() => {
                                          Promise.all(AsyncStorage.setItem(__KEYS__.IS_LOGIN, 'false'), AsyncStorage.setItem(__KEYS__.IS_AUDIT, 'false'),
                                              AsyncStorage.setItem(__KEYS__.USER_NAME, '')).then(res => {
                                              setTimeout(() => {
                                                  this._logout();
                                              }, 50)
                                          }).catch(err => {
                                              setTimeout(() => {
                                                  this._logout();
                                              }, 50)
                                          })
                                      }}>
                        <View style={{
                            width: 291 * __MIN_PIXEL__,
                            height: 42 * __MIN_PIXEL__,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 21 * __MIN_PIXEL__,
                            backgroundColor: 'white',
                            borderRadius: 5,
                            borderWidth: 1,
                            borderColor: '#666666'
                        }}>

                            <Text style={{fontSize: 18, color: '#666666'}}>退出登陆</Text>

                        </View>
                    </TouchableOpacity>

                </ScrollView>

            </View>


        );
    }

    _renderTitleView = () => {
        return (
            <View style={{width: __SCREEN_WIDTH__, height: 10 * __MIN_PIXEL__, backgroundColor: '#f9f9f9'}}>
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