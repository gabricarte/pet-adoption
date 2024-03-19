import {StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.lightpink,
    justifyContent: 'space-evenly'
  },
  petContainer: {
    backgroundColor: colors.lightpink,
    justifyContent: 'space-between',
    alignItems: 'center',
    height:  '40%',
  },
  infosContainer: {
    backgroundColor: 'whitesmoke',
    justifyContent: 'space-evenly',
    height: '55%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 15,
    alignItems: 'center',
    elevation: 5
  }, 
  petInfoText: {
    fontSize: 20,
    paddingBottom: 10,
    fontWeight: 'poppins-bold',
    color: 'black',
  },
  ownerInfoText:{
    fontSize: 20,
    fontFamily: 'poppins'
  },

})


export default styles;