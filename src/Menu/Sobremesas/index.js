import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Section from '../Components/section';
import Header from '../Components/header';

function Sobremesas(){
    return(
        <View style = {{backgroundColor: 'white'}}>
            <Header title = 'Sobremesas' />
            <ScrollView>
                <Section
                    title = 'Bolo'
                    money = '9,00'
                    image = {require('../../img/Sobremesa/bolo.jpg')}
                />
                <Section 
                    title = "Sorvete"
                    money = "2,00"
                    image = {require('../../img/Sobremesa/sorvete.jpg')}
                />
                <Section 
                    title = "Pudim"
                    money = "5,00"
                    image = {require('../../img/Sobremesa/pudim.jpg')}
                />
               
                
            </ScrollView>
        </View>
    );
}
export default Sobremesas;