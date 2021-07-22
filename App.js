import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/Home/index';
import Menu from './src/Menu/index';
import Promotions from './src/Promotions';
import CustomDrawer from './src/CustomDrawer';
//#2b0e01

const Drawer = createDrawerNavigator();

function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerStyle = {{color : 'red', opacity : 0.97}}  >
        <Drawer.Screen name = "Home" component = {Home}   />
        <Drawer.Screen name = "Menu" component = {Menu} />
        <Drawer.Screen name = "Promotions" component = {Promotions} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
