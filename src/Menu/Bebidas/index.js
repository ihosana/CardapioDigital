import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Section from '../Components/section';
import Header from '../Components/header';

function Bebidas(){
    return(
        <View style = {{backgroundColor: 'white'}}>
            <Header title = 'Bebidas' />
            <ScrollView>
                <Section
                    title = 'Água'
                    money = '3,00'
                    image = {require('../../img/Bebidas/agua.webp')}
                />
                <Section 
                    title = "Água com gás"
                    money = "5,00"
                    image = {require('../../img/Bebidas/gas.webp')}
                />
                <Section 
                    title = "Refri"
                    money = "8,00"
                    image = {require('../../img/Bebidas/refri.jpg')}
                />
                <Section 
                    title = "Suco"
                    money = "6,00"
                    image = {require('../../img/Bebidas/suco.jpg')}
                />
                <Section />
                
            </ScrollView>
        </View>
    );
}
export default Bebidas;