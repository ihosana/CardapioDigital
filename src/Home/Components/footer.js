import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'; 
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage} from 'react-native-responsive-fontsize';

class Footer extends Component{
    render(){
        return(
            <View style = {style.container}>
                <TouchableOpacity style = {style.circle}>
                    <Icon name = 'logo-instagram' style = {style.icons} />
                </TouchableOpacity>
                <TouchableOpacity style = {style.circle}>
                    <Icon name = 'logo-pinterest' style = {style.icons} />
                </TouchableOpacity>
                <TouchableOpacity style = {style.circle}>
                    <Icon name = 'mail' style = {style.icons} />
                </TouchableOpacity>
                <TouchableOpacity style = {style.circle}>
                    <Icon name = 'ios-logo-facebook' style = {style.icons} />
                </TouchableOpacity>
            </View>
        );
    }
}
export default Footer;

const style = StyleSheet.create({
    container : {
        width: wp('100%'),
        height: hp('15%'),
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        paddingLeft: '8%'
    },
    icons : {
        color: '#ba8200',
        fontSize: RFPercentage(7)
    },
    circle : {
        backgroundColor: '#240500',
        margin: 3,
        width: wp('20%'),
        height: hp('10%'),
        borderRadius: 50,
        alignItems: 'center',
        paddingTop: '2%'
    }
});