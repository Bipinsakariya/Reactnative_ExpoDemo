import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
// import { getLoginData } from '../action/Login';
import { connect, ConnectedProps } from 'react-redux';
import Loader from '../component/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, globleStyle } from '../globleStyle';
import { requestLogin } from '../redux/action/general';

class Login extends Component {
    state = {
        // email:'',
        // pass:'',
        email: 'bipin74@mailinator.com',
        pass: 'IHaveASupperHardPa$$w0!2d',
    }

    handleLogin = async () => {
        this.props.requestLogin(this.state.email, this.state.pass)
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={globleStyle.centerView}>
                <Text style={globleStyle.titleTxt}>Login</Text>
                <TextInput
                    style={globleStyle.textInputView}
                    placeholder={'Enter Email'}
                    placeholderTextColor={'black'}
                    autoCapitalize='none'
                    onChangeText={email => this.setState({ email: email })}
                    value={this.state.email}
                />
                <TextInput
                    style={globleStyle.textInputView}
                    placeholder={'Enter Password'}
                    placeholderTextColor={'black'}
                    autoCapitalize='none'
                    secureTextEntry={true}
                    onChangeText={pass => this.setState({ pass: pass })}
                    value={this.state.pass}
                />
                <TouchableOpacity
                    onPress={() => {
                        this.handleLogin()
                    }}
                    style={[globleStyle.buttonView, { backgroundColor: colors.skyblue }]}>
                    <Text style={globleStyle.btnTxt}>Login</Text>
                </TouchableOpacity>
                <Loader 
                    show={this.props.loading}
                />
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestLogin: (email, pass) => dispatch(requestLogin(email, pass))
    };
};
const mapStateToProps = (params) => ({
    userData: params.params.userData || "",
    loading: params.params.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);