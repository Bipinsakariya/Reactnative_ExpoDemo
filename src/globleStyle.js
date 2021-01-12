import { StyleSheet } from 'react-native'
export const colors = {
    white:'#ffffff',
    black:'#000000',
    powderblue:'#B0E0E6',
    steelblue:'#4682B4',
    skyblue:'#87ceeb'

}

const globleStyle = StyleSheet.create({
    centerView:{
        flex:1,
        backgroundColor:'steelblue', 
        justifyContent:'center', 
        alignItems:'center'
    },
    buttonView:{
        marginVertical:'1%',
        height:50, 
        width:'85%', 
        alignItems:'center',
        justifyContent:'center', 
        backgroundColor:'powderblue'
    },
    btnTxt:{
        fontSize:20, 
        color:'black'
    },
    titleTxt:{
        color:'black', 
        fontSize:25, 
        fontWeight:'500', 
        paddingVertical:'2%'
    },
    textInputView:{
        backgroundColor:'powderblue',
        width:'85%',
        height:50, 
        paddingLeft:'5%',
        marginVertical:'1%'
    },
    headerStyle:{
        height:80, 
        backgroundColor:'steelblue', 
        justifyContent:'center', 
        alignItems:'center'
    },
    headerTxt:{
        fontSize:20, 
        fontWeight:'500', 
        paddingTop:'8%', 
        color:'white'
    },
    listView:{
        paddingVertical:'5%', 
        backgroundColor:'skyblue', 
        width:'100%', 
        marginVertical:'1%', 
        flexDirection:'row'
    },
    listTxt:{
        fontSize:20, 
        marginLeft:10, 
        color:'black'
    }
})

export { globleStyle }  