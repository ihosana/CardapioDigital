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
                    title = 'Lasanha'
                    money = '30,00'
                />
                <Section 
                    title = "Lasanha"
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
export default Sobremesas;