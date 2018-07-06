import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import ListRowCell from "../../home/components/ListRowCell";

export default class ItemView extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <View style={styles.container}>
                <View style={{width: __SCREEN_WIDTH__, height: 17 * __MIN_PIXEL__}} />
                <ScrollView>
                    <ListRowCell title={'代取快递'} moneyDesc={'25元'} type={0} statusType={this.props.statusType}/>
                    <ListRowCell title={'代取快递'} moneyDesc={'25元'} type={0} statusType={this.props.statusType}/>
                    <ListRowCell title={'代取快递'} moneyDesc={'25元'} type={0} statusType={this.props.statusType}/>
                    <ListRowCell title={'代取快递'} moneyDesc={'25元'} type={0} statusType={this.props.statusType}/>
                    <ListRowCell title={'代取快递'} moneyDesc={'25元'} type={0} statusType={this.props.statusType}/>
                    <ListRowCell title={'代取快递'} moneyDesc={'25元'} type={0} statusType={this.props.statusType}/>
                    <ListRowCell title={'代取快递'} moneyDesc={'25元'} type={0} statusType={this.props.statusType}/>
                    <ListRowCell title={'代取快递'} moneyDesc={'25元'} type={0} statusType={this.props.statusType}/>
                    <ListRowCell title={'代取快递'} moneyDesc={'25元'} type={0} statusType={this.props.statusType}/>
                    <ListRowCell title={'代取快递'} moneyDesc={'25元'} type={0} statusType={this.props.statusType}/>
                    <ListRowCell title={'代取快递'} moneyDesc={'25元'} type={0} statusType={this.props.statusType}/>
                    <ListRowCell title={'代取快递'} moneyDesc={'25元'} type={0} statusType={this.props.statusType}/>
                    <ListRowCell title={'代取快递'} moneyDesc={'25元'} type={0} statusType={this.props.statusType}/>
                    <ListRowCell title={'代取快递'} moneyDesc={'25元'} type={0} statusType={this.props.statusType}/>
                    <ListRowCell title={'代取快递'} moneyDesc={'25元'} type={0} statusType={this.props.statusType}/>
                </ScrollView>
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