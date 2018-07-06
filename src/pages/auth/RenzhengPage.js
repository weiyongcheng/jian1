import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text, TouchableOpacity,
    Image, ImageBackground
} from 'react-native';

import return_img from '../home/sources/return.png';
import {Input} from "teaset";
import rectangle from '../home/sources/rectangle.png';
import add_img from './sources/add.png';

export default class RenzhengPage extends Component {

    state = {name: '', phone: '', idCard: ''};

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

                        <Text style={{fontSize: 17, color: '#030303'}}>用户认证</Text>
                    </View>
                </View>

                <View style={{width: __SCREEN_WIDTH__, height: 10 * __MIN_PIXEL__}} />

                <View style={{width: __SCREEN_WIDTH__, height: 44 * __MIN_PIXEL__, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{marginLeft: 26 * __MIN_PIXEL__, width: 61 * __MIN_PIXEL__, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 14, color: '#666666'}}>姓名</Text>
                    </View>
                    <Input
                        style={{flex: 1, backgroundColor: 'white', borderWidth: 0}}
                        value={this.state.name}
                        placeholder={'填写姓名，最多20个字符'}
                        onChangeText={text => this.setState({name: text})}
                    />
                </View>

                <View style={{width: __SCREEN_WIDTH__, height: __PIXEL__, backgroundColor: '#E7E7E7', alignSelf: 'center'}} />

                <View style={{width: __SCREEN_WIDTH__, height: 44 * __MIN_PIXEL__, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{marginLeft: 26 * __MIN_PIXEL__, width: 61 * __MIN_PIXEL__, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 14, color: '#666666'}}>手机号</Text>
                    </View>
                    <Input
                        style={{flex: 1, backgroundColor: 'white', borderWidth: 0}}
                        value={'12345678912'}
                        disabled={true}
                    />
                </View>

                <View style={{width: __SCREEN_WIDTH__, height: __PIXEL__, backgroundColor: '#E7E7E7', alignSelf: 'center'}} />

                <View style={{width: __SCREEN_WIDTH__, height: 44 * __MIN_PIXEL__, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{marginLeft: 26 * __MIN_PIXEL__, width: 61 * __MIN_PIXEL__, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 14, color: '#666666'}}>身份证</Text>
                    </View>
                    <Input
                        style={{flex: 1, backgroundColor: 'white', borderWidth: 0}}
                        value={this.state.idCard}
                        placeholder={'填写身份证号'}
                        onChangeText={text => this.setState({idCard: text})}
                    />
                </View>

                <View style={{width: __SCREEN_WIDTH__, height: __PIXEL__, backgroundColor: '#E7E7E7', alignSelf: 'center'}} />

                <View style={{backgroundColor: 'white'}}>
                    <Text style={{fontSize: 14, color: '#666666', marginTop: 15 * __MIN_PIXEL__, marginLeft: 26 * __MIN_PIXEL__, marginBottom: 26 * __MIN_PIXEL__}}>上传身份证照片</Text>

                    <View style={{width: __SCREEN_WIDTH__, height: 120 * __MIN_PIXEL__, flexDirection: 'row', alignItems: 'center',
                        justifyContent: 'center', marginBottom: 12 * __MIN_PIXEL__}}>
                        <View style={{width: 151 * __MIN_PIXEL__, height: 96 * __MIN_PIXEL__, borderWidth: 1, borderColor: '#dfdfdf',
                            justifyContent: 'center', alignItems: 'center'}}>

                            <Image source={add_img} style={{width: 48 * __MIN_PIXEL__, height: 48 * __MIN_PIXEL__}} resizeMode={'stretch'}/>
                            <Text style={{fontSize: 14, color: '#e0e0e0', marginTop: 6 * __MIN_PIXEL__}}>身份证正面</Text>

                        </View>

                        <View style={{width: 151 * __MIN_PIXEL__, height: 96 * __MIN_PIXEL__, borderWidth: 1, borderColor: '#dfdfdf',
                            justifyContent: 'center', alignItems: 'center', marginLeft: 12}}>

                            <Image source={add_img} style={{width: 48 * __MIN_PIXEL__, height: 48 * __MIN_PIXEL__}} resizeMode={'stretch'}/>
                            <Text style={{fontSize: 14, color: '#e0e0e0', marginTop: 6 * __MIN_PIXEL__}}>身份证正面</Text>

                        </View>
                    </View>
                </View>

                <ImageBackground source={rectangle} style={{width: 291 * __MIN_PIXEL__, height: 42 * __MIN_PIXEL__, alignSelf: 'center',
                    justifyContent: 'center', alignItems: 'center', marginTop: 20 * __MIN_PIXEL__}}>

                    <Text style={{fontSize: 18, color: 'white'}}>提交审核</Text>

                </ImageBackground>
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