import {StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
  petContainer:{
    margin: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 50,
    borderRadius: 20,
    elevation: 5,
  },
  imgContainer: {
    backgroundColor: colors.lightblue,
    width: 180,
    height: 180,
    borderRadius: 20,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  infoContainer: {
    flex: 1,
    height: 150,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title:{
    fontFamily: 'poppins-bold',
    color: 'black',
    fontSize: 20
  },
  subtitle: {
    fontFamily: 'poppins',
  }

})


export default styles;