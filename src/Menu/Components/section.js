import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons'
import { nodeName } from 'min-document';
//{require('../../img/Pratos/lasanha.jpeg')}

class Section extends Component{
    constructor(props){
        super(props);
        this.state = {isVisible: false};
    }
    render(){
        return(
            <View style = {{alignItems: 'center'}}>
{/*------------------- ATICAÇÃO DO MODAL -------------------------*/ }
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.isVisible}
                    onRequestClose={() => {
                        this.setState({ isVisible: false });
                    }}
                    >
{/* -----------------  CAIXA MODAL ------------------------------------------*/}
                    <View style={style.modal}>
                        <View style = {style.modal_header}>
                            <Image source = {this.props.image} style = {style.modal_image} />
                            <Text style = {style.titlemodal}>{this.props.title} </Text>
                        </View>
                        <View style = {style.ingredientes}>
                            <Text style = {style.ingredientes_text}>Ingredientes: {this.props.ingredientes}</Text>
                            <View style = {{flexDirection: 'row'}}>
                                <Icon name = 'basket-outline' size = {20} /><Text style = {style.modal_money}>{this.props.money}</Text>
                            </View>
                            <Text style = {style.text_info}>Quantidade: </Text>
                            <TextInput 
                                style = {style.input_quantidade}
                                keyboardType = 'numeric'
                            />
                            <Text style = {style.text_info}>Cliente: </Text>
                            <TextInput style = {style.input_name} />
                        </View>

                        <View style = {style.box_modal_inferior}>
                                 {/* BOTÃO COMPRAR */}
                            <TouchableOpacity  style = {style.modal_comprar}>
                                <Text style = {style.text_modal_comprar}>Pedir</Text>
                            </TouchableOpacity>

                                    {/* BOTÃO FECHAR */}
                            <TouchableOpacity
                                style = {style.fechar}
                                onPress={() => {
                                    this.setState({ isVisible: false });
                                }}
                            >
                                <Icon name = 'md-close' size = {30} style = {style.fechar_text} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

{/*--------------------- BOX DOS PRODUTOS ----------------------------*/ }
                <TouchableOpacity style = {style.box_one} onPress={()=>{
                    this.setState({isVisible : true})
                }}>

                    <View style = {style.image}>
                        <Image source = {this.props.image}  style = {style.image} />
                    </View>
                    <View style = {style.box_second} >
                        <View style = {style.container_title}>
                            <Text style = {style.title}>{this.props.title}</Text>
                        </View>
                        <View style = {style.container_money}>
                            <Text style = {style.money} >R${this.props.money}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Section;

const style = StyleSheet.create({
    box_one : {
        backgroundColor: 'white',
        width: wp('90%'),
        height: hp('20%'),
        flexDirection: 'row',
        marginTop: '2%',
        elevation: 10,
        opacity: 0.9,
    },
    image : {
        width: wp('40%'),
        height: hp('20%')
    },
    box_second : {
        opacity: 1.0,
        width: wp('60%'),
        height: hp('20%')
    },
    container_title : {
       /* backgroundColor: '#ff722b', */
        width: wp('50%'),
        height: hp('7%'),
        elevation: 10
     
    },
    container_money : {
        backgroundColor: 'white',
        width: wp('30%'),
        height: hp('6%'),
        position: 'absolute',
        bottom: 0,
        marginLeft: 5,
        marginBottom: 3,
        borderRadius: 5,
        //elevation: 10
    },
    title : {
        fontSize: RFPercentage(3.5),
        textAlign: 'center',
        color: '#240500'
    },
    money : {
        fontSize: RFPercentage(4),
        textAlign: 'center',
        color: '#ba8200'
    },
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 50,
      },
    titlemodal : {
        fontSize: RFPercentage(5),
        color: 'white',
        marginTop: hp('5%'),
        marginLeft: wp('5%')
    },
    ingredientes : {
        width: wp('90%'),
        height: hp('40%'),
        backgroundColor: '#f5f5f5',
        marginTop: hp('5%')
    },
    ingredientes_text : {
        fontSize: RFPercentage(3),
    },
    fechar : {
        backgroundColor: '#610000',
        width: wp('12%'),
        height: hp('7%'),
        borderRadius: 5,
        alignItems: 'center',
        elevation: 10,
        marginLeft: wp('20%'),
        marginTop: hp('2%')
    },
    fechar_text : {
        color: '#ff2b1c',
        marginTop: hp('1%')
    },
    modal_image : {
        width: wp('35%'),
        height: hp('20%'),
        borderRadius: 5
        
    },
    modal_header : {
        flexDirection: 'row',
        backgroundColor: '#c74516',
        width: wp('100%'),
        top: 0,
        position: 'relative',
        elevation: 4
    },
    modal_comprar : {
        width: wp('30%'),
        height: hp('10%'),
        borderRadius: 5,
        alignItems: 'center',
        elevation: 10,
        backgroundColor: '#4ad42f'
    },
    box_modal_inferior : {
        flexDirection: 'row'
    },
    text_modal_comprar : {
        color: '#256319',
        fontSize: RFPercentage(4),
        marginTop: hp('2%')
    },
    input_quantidade : {
        width: wp('10%'),
        height: hp('4%'),
        borderBottomColor: '#8a0900',
        borderBottomWidth: 0.5,
    },
    input_name : {
        width: wp('90%'),
        height: hp('4%'),
        borderBottomColor: '#8a0900',
        borderBottomWidth: 0.5
    },
    text_info : {
        marginTop: hp('5%'),
        fontSize: RFPercentage(3)
    },
    modal_money : {
        color: 'green',
        marginLeft: wp('2%')
    }
    
});