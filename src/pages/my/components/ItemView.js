import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import ListRowCell from "../../home/components/ListRowCell";
import EmptyView from "../../../components/EmptyView";

export default class ItemView extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <View style={styles.container}>
                <View style={{width: __SCREEN_WIDTH__, height: 17 * __MIN_PIXEL__}} />
                <View style={{flex: 1, alignItems: 'center', paddingTop: 110 * __MIN_PIXEL__}}>
                    <EmptyView/>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    }
});