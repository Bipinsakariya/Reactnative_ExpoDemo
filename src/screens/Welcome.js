import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {colors, globleStyle} from '../globleStyle';

export default class Signup extends Component{
    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={globleStyle.centerView}>
                <TouchableOpacity
                    onPress={()=> navigate('LoginScreen')} 
                    style={[globleStyle.buttonView,{backgroundColor:colors.skyblue}]}>
                    <Text style={globleStyle.btnTxt}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=> {}}
                    style={[globleStyle.buttonView,{backgroundColor:colors.skyblue}]}>
                    <Text style={globleStyle.btnTxt}>Sign Up</Text>
                </TouchableOpacity>               
            </View>
        )
    }
}