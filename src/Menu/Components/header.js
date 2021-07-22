import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';

class Header extends Component{
    render(){
        return(
            <View
                style = {{
                    backgroundColor: '#240500',
                    width: wp('100%'),
                    height: hp('10%'),
                    padding: 4,
                    flexDirection: 'row'
                }}
            >
                <Icon name = 'ios-restaurant-outline' size = {RFPercentage(8)} color = '#ba8200' />
                <Text
                    style = {{
                        color: 'white',
                        fontSize: RFPercentage(5),
                        marginLeft: 10
                    }}
                >
                    {this.props.title}
                </Text>

            </View>
        );
    }
}
export default Header;