import {StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
    },
    ownerHeader: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ownerName:{
        fontFamily: 'poppins-bold',
        fontSize: 20
    },
    ownerSubtitle:{
        textAlign: 'center'
    },
    ownerBody: {
        alignItems: 'center',
        height: '50%',
        justifyContent: 'center'
    },
    ownerBodyText: {
        fontSize: 20
    }

})


export default styles;