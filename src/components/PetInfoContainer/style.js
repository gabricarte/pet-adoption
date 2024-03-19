import {StyleSheet } from "react-native";;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row', 
        gap: 5,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
    }, 
    infoContainer:{
        backgroundColor: 'white',
        width: 80,
        height: 70,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        elevation: 5,
    },
    infoText:{
        fontSize: 16,
        fontFamily: 'poppins',
    },
    title:{
        fontFamily: 'poppins-bold'
    }
})


export default styles;