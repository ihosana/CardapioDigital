import React from 'react';
import {View, Text } from 'react-native';
import { DrawerNavigatorItems} from '@react-navigation/drawer';

function CustomDrawer({...props}){
    return(
        <View>
            <Text>Testando</Text>
            <DrawerNavigatorItems {...props} />

        </View>
    );
}
export default CustomDrawer;