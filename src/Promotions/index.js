import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from './header'
import Container from './container'

function Promotions(){
    // PÁGINA DE PROMOÇÕES
    return(
        <View>
            <Header title = 'Promoções' />  
            <View style = {{flexDirection: 'row'}}> 
                <Container title_header = 'Segunda'
                            descrition = 'Filé'
                            preco = 'R$ 20,00'
                            desc = '-9%'
                />
                <Container title_header = 'Quinta'
                            descrition = 'Macarrão'
                            preco = 'R$ 20,00' 
                            desc = '-10%'
                            />           
            </View>
            <View style = {{flexDirection: 'row'}}>
                <Container title_header = 'Quarta'
                            descrition = 'Feijoada'
                            preco = 'R$ 20,00'
                            desc = '-40%'
                />
                <Container title_header = 'Sexta'
                            descrition = 'Pizzas'
                            preco = 'R$ 20,00'
                            desc = '-25%'
                />
            </View>
        </View>
    );
}
export default Promotions;