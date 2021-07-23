import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Section from '../Components/section';
import Header from '../Components/header';

function Pratos(){
    return(
        <View style = {{backgroundColor: 'white'}}>
            <Header title = 'Pratos' />
            <ScrollView>
                <Section
                    title = 'Filé a parmegiana'
                    money = '30,00'
                    image = {require('../../img/Pratos/parmegiana.jpg')}
                    ingredientes = "Filé | Macarrão | Molho"
                />
                <Section 
                    title = "Feijoada"
                    money = "20,00"
                    image = {require('../../img/Pratos/feijoada.png')}
                    ingredientes = "Feijão | Linguiça | Pimenta"
                />
                <Section 
                    title = "Lasanha"
                    money = "30,00"
                    image = {require('../../img/Pratos/lasanha.jpeg')}
                    ingredientes = "Frango | Catupiry | Massas | Presunto | Queijo"
                />
                <Section 
                    title = "Bolo de Carne"
                    money = "50,00"
                    image = {require('../../img/Pratos/carne.jpg')}
                    ingredientes = "Carne | Ovo | Cebola"
                />
                <Section 
                    title = "Lagosta"
                    money = "80,00"
                    image = {require('../../img/Pratos/lagosta.jpg')}
                    ingredientes = "Lagosta"
                />
                <Section 
                    
                />
                
            </ScrollView>
        </View>
    );
}
export default Pratos;