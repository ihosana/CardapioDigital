import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Header from './header'
import Container from './container'
import HeaderDate  from './headerdate';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function Promotions(){
    // PÁGINA DE PROMOÇÕES
    return(
        <ScrollView>
            <Header title = 'Promoções' />  
            <HeaderDate title = 'Segunda' />
            <ScrollView horizontal = {true} style = {style.horizontal}>
                <View style = {{flexDirection: 'row'}}> 
                    <Container title_header = 'Name'
                                descrition = 'R$ 00,00'
                                preco = 'R$ 00,00'
                                desc = '-0%'
                    />
                   <Container title_header = 'Name'
                                descrition = 'R$ 00,00'
                                preco = 'R$ 00,00'
                                desc = '-0%'
                    />
                   <Container title_header = 'Name'
                                descrition = 'R$ 00,00'
                                preco = 'R$ 00,00'
                                desc = '-0%'
                    />            
                </View>
            </ScrollView>
            <HeaderDate title = 'Terça' />
            <ScrollView horizontal = {true} style = {style.horizontal}>
                <View style = {{flexDirection: 'row'}}>
                <Container title_header = 'Name'
                                descrition = 'R$ 00,00'
                                preco = 'R$ 00,00'
                                desc = '-0%'
                    />
                    <Container title_header = 'Name'
                                descrition = 'R$ 00,00'
                                preco = 'R$ 00,00'
                                desc = '-0%'
                    />
                    <Container title_header = 'Name'
                                descrition = 'R$ 00,00'
                                preco = 'R$ 00,00'
                                desc = '-0%'
                    />
                    <Container title_header = 'Name'
                                descrition = 'R$ 00,00'
                                preco = 'R$ 00,00'
                                desc = '-0%'
                    />  
                </View>
            </ScrollView>
            <HeaderDate title = 'Quarta' />
            <ScrollView horizontal = {true} style = {style.horizontal}>
                <View style = {{flexDirection: 'row'}}>
                <Container title_header = 'Name'
                                descrition = 'R$ 00,00'
                                preco = 'R$ 00,00'
                                desc = '-0%'
                    />
                    <Container title_header = 'Name'
                                descrition = 'R$ 00,00'
                                preco = 'R$ 00,00'
                                desc = '-0%'
                    />
                    <Container title_header = 'Name'
                                descrition = 'R$ 00,00'
                                preco = 'R$ 00,00'
                                desc = '-0%'
                    />
                    <Container title_header = 'Name'
                                descrition = 'R$ 00,00'
                                preco = 'R$ 00,00'
                                desc = '-0%'
                    />  
                </View>
            </ScrollView>
            <HeaderDate title = 'Quinta' />
            <ScrollView horizontal = {true} style = {style.horizontal}>
                <View style = {{flexDirection: 'row'}}>
                <Container title_header = 'Name'
                                descrition = 'R$ 00,00'
                                preco = 'R$ 00,00'
                                desc = '-0%'
                    />
                    <Container title_header = 'Name'
                                descrition = 'R$ 00,00'
                                preco = 'R$ 00,00'
                                desc = '-0%'
                    />
                    <Container title_header = 'Name'
                                descrition = 'R$ 00,00'
                                preco = 'R$ 00,00'
                                desc = '-0%'
                    />
                    <Container title_header = 'Name'
                                descrition = 'R$ 00,00'
                                preco = 'R$ 00,00'
                                desc = '-0%'
                    />  
                </View>
            </ScrollView>
            <HeaderDate title = 'Sexta' />
            <ScrollView horizontal = {true} style = {style.horizontal}>
                <Container title_header = 'Name'
                                descrition = 'R$ 00,00'
                                preco = 'R$ 00,00'
                                desc = '-0%'
                    />
                    <Container title_header = 'Name'
                                descrition = 'R$ 00,00'
                                preco = 'R$ 00,00'
                                desc = '-0%'
                    />
                    <Container title_header = 'Name'
                                descrition = 'R$ 00,00'
                                preco = 'R$ 00,00'
                                desc = '-0%'
                    />
                    <Container title_header = 'Name'
                                descrition = 'R$ 00,00'
                                preco = 'R$ 00,00'
                                desc = '-0%'
                    />  
                
            </ScrollView>
        </ScrollView>
    );
}
export default Promotions;

const style = StyleSheet.create({
    horizontal : {
        backgroundColor:  '#fafafa',
        height: hp('26%'),
        elevation: 10

    }
});