import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage} from 'react-native-responsive-fontsize';
//{require('../../img/Pratos/lasanha.jpeg')}

class Section extends Component{
    render(){
        return(
            <View style = {{alignItems: 'center'}}>
                <TouchableOpacity style = {style.box_one}>
                    <View style = {style.image}>
                        <Image source = {this.props.image}  style = {style.image} />
                    </View>
                    <View style = {style.box_second} >
                        <View style = {style.container_title}>
                            <Text style = {style.title}>{this.props.title}</Text>
                        </View>
                        <View style = {style.container_money}>
                            <Text style = {style.money} >R${this.props.money}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Section;

const style = StyleSheet.create({
    box_one : {
        backgroundColor: 'white',
        width: wp('90%'),
        height: hp('20%'),
        flexDirection: 'row',
        marginTop: '2%',
        elevation: 10,
        opacity: 0.9,
    },
    image : {
        width: wp('40%'),
        height: hp('20%')
    },
    box_second : {
        opacity: 1.0,
        width: wp('60%'),
        height: hp('20%')
    },
    container_title : {
       /* backgroundColor: '#ff722b', */
        width: wp('50%'),
        height: hp('7%'),
        elevation: 10
     
    },
    container_money : {
        backgroundColor: 'white',
        width: wp('30%'),
        height: hp('6%'),
        position: 'absolute',
        bottom: 0,
        marginLeft: 5,
        marginBottom: 3,
        borderRadius: 5,
        //elevation: 10
    },
    title : {
        fontSize: RFPercentage(3.5),
        textAlign: 'center',
        color: '#240500'
    },
    money : {
        fontSize: RFPercentage(4),
        textAlign: 'center',
        color: '#ba8200'
    }
});