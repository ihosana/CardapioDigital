import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Section from '../Components/section';
import Header from '../Components/header';

function Porcoes(){
    return(
        <View style = {{backgroundColor: 'white'}}>
            <Header title = 'Porções' />
            <ScrollView>
                <Section
                    title = 'Arroz'
                    money = '10,00'
                    image = {require('../../img/Porcoes/arroz.jpg')}
                />
                <Section 
                    title = "Feijão"
                    money = "15,00"
                    image = {require('../../img/Porcoes/feijao.webp')}
                />
                <Section 
                    title = "Batata Frita"
                    money = "18,00"
                    image = {require('../../img/Porcoes/batata.jpg')}
                />
               
                
            </ScrollView>
        </View>
    );
}
export default Porcoes;