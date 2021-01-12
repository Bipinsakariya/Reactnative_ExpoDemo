import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{Component} from 'react';
import { View, Text } from 'react-native';
import { globleStyle } from '../globleStyle';

export default class Splash extends Component {
    
    async componentDidMount(){
        // const user_login = await AsyncStorage.getItem('APP_TOKEN');
        // if(user_login !== null){
        //     this.props.navigation.navigate('HomeScreen')
        // } else {
            this.props.navigation.navigate('WelcomeScreen')
        // }
    }

    render(){
        return(
            <View style={globleStyle.centerView}>
                <Text style={globleStyle.titleTxt}>Splash Screen</Text>
            </View>
        )
    }
}