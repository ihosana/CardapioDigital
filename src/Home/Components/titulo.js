import React, {Component} from 'react';
import {ImageBackground, View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage} from 'react-native-responsive-fontsize';
class Title extends Component{
    render(){
        return(
            <ImageBackground source={require('../../img/food.jpg')} style = {{width : wp("100%"), height : hp("40%"), alignItems: 'center'}} >
                <View style = {style.container}>
                    <Text style = {style.texto}>DigitalFood</Text>
                </View>
            </ImageBackground>
        );
    }
}
export default Title;

const style = StyleSheet.create({
    container : {
        backgroundColor: 'black',
        width: wp('80%'),
        height: hp('16%'),
        alignItems: 'center',
        paddingTop: '5%',
        /* position: 'absolute',
        bottom: 0 */
        marginTop: '50%',
        elevation: 10
        
    },
    texto : {
        color: 'red',
        fontSize: RFPercentage(7)
    }
});


