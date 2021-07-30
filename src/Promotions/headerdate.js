import React, {Component} from 'react';
import {View, Text, StyleSheet, PickerIOSComponent} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons'

class HeaderDate extends Component{
    render(){
        return <View style = {style.box}>
            <Text style = {style.text}>{this.props.title} </Text>
        </View>
    }
}
const style = StyleSheet.create({
    box : {
        width: wp('90%'),
        marginLeft: wp('5%'),
        height: hp('10%'),
        alignItems: 'center',
        marginTop: hp('3%')
        
    },
    text : {
        fontSize: RFPercentage(5),
        color: '#bf280d'
    }
});


export default HeaderDate;