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
                    title = 'Filé Aparmediano'
                    money = '30,00'
                />
                <Section 
                    title = "Feijoada"
                    money = "30,00"
                />
                <Section 
                    title = "Espaguete ao molho branco"
                    money = "30,00"
                />
                <Section 
                    title = "Frango"
                    money = "30,00"
                />
                <Section 
                    title = "Name"
                    money = "30,00"
                />
                <Section 
                    title = "Name"
                    money = "30,00"
                />
                
            </ScrollView>
        </View>
    );
}
export default Pratos;