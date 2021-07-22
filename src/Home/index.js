import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Title from './Components/titulo';
import Footer from './Components/footer';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage} from 'react-native-responsive-fontsize';

function Home(){
    return(
        <View style ={{width: '100%', height: '100%', backgroundColor: '#ff8345'}}>
            <Title style = {{flex: 3}} />
            <View style = {style.box_endereco}>
                <View style = {style.box_numero}>
                    <Text style = {style.text_number}>(00) 00000 - 00000</Text>
                    <Text style = {style.text_endereco}>ou</Text>
                    <Text style = {style.text_number}>(00) 00000 - 00000</Text>
                </View>
                <Text>Endereço</Text>
                <Text style = {style.text_endereco}>Av.Miguel Machado N° 14, Rio Doce, Parnaíba</Text>
            </View>
            <Footer />
        </View>
    );
}
export default Home;

const style = StyleSheet.create({
    box_endereco : {
        width: wp('100%'),
        height: hp('35%'),
        marginTop: '15%',
        alignItems: 'center'
    },
    box_numero : {
        width: wp('90%'),
        height: hp('18%'),
        borderTopColor: 'yellow',
        borderTopWidth: 1,
        borderBottomColor: 'yellow',
        borderBottomWidth: 1
    },
    text_endereco : {
        fontSize: RFPercentage(2),
        textAlign: 'center'
    },
    text_number : {
        fontSize: RFPercentage(5),
        textAlign: 'center'
    }
});