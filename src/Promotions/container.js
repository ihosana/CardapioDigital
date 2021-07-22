import { styleSheets } from 'min-document';
import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage} from 'react-native-responsive-fontsize';

class Container extends Component{
    render(){
        return  <View style = {style.box}>
                    <View style = {style.header_box}>
                        <Text style = {style.title_header}>{this.props.title_header}</Text>
                    </View>
                    <Text>{this.props.descrition}</Text>
                    <View style ={{flexDirection:'row'}}>
                        <Text>{this.props.preco}</Text>
                        <View style = {style.desconto}>
                            <Text style = {style.desc}>{this.props.desc}</Text>
                        </View>
                    </View>
                </View>
    }
}

export default Container;

const style = StyleSheet.create({
    box : {
        width: wp('45%'),
        height: hp('20%'),
        backgroundColor: 'white',
        elevation: 10,
        marginLeft: wp('2%'),
        marginTop: hp('3%')
    },
    header_box : {
        width: wp('100%'),
        height: hp('5%'),
        //backgroundColor: 'white',
        elevation: 10,
        paddingLeft: wp('12%')
    },
    title_header : {
        color: 'red',
        fontSize: RFPercentage(4),
       // textAlign: 'center'
    },
    desconto : {
        width: wp('10%'),
        height: hp('3%'),
        backgroundColor: 'red',
        marginLeft: wp('1%'),
        marginTop: hp('2%')
    },
    desc : {
        fontSize: RFPercentage(2.5)
    }
});

