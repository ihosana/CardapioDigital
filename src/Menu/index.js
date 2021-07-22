import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Bebidas from './Bebidas/index';
import Pratos from './Pratos/index';
import Sobremesas from './Sobremesas/index';
import Porcoes from './Porcoes/index';

const Tab = createBottomTabNavigator();

const icons = {
    Pratos : {
        name: 'md-restaurant'
    },
    Bebidas : {
        name: 'md-wine'
    },
    Sobremesas : {
        name: 'md-ice-cream-outline'
    },
    Porcoes : {
        name: 'ios-people'
    }
}

function Menu(){
    return(
        <NavigationContainer independent = {true}>
            <Tab.Navigator
                screenOptions={ ({route}) => ({
                    tabBarIcon: ({color, size}) => {
                        const { name } = icons[route.name];
                        return <Icon name = {name} color = {color} size = {size} />
                    }
                })    }
                tabBarOptions={{
                    activeTintColor: 'yellow',
                    inactiveTintColor: 'white',
                    inactiveBackgroundColor: '#240500',
                    activeBackgroundColor: '#240500'
                    
                }}
            >
                <Tab.Screen name = "Pratos" component = {Pratos} />
                <Tab.Screen name = "Bebidas" component = {Bebidas} />
                <Tab.Screen name = "Sobremesas" component = {Sobremesas} />
                <Tab.Screen name = "Porcoes" component = {Porcoes} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default Menu;