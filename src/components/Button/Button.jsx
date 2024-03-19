import {Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../theme/colors';

const Button = (props) => {
  return (
    <TouchableOpacity 
    style={styles.btn}
    onPress={props.onClick}
    >
      <Text style={styles.btnText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    btn: {
        padding: 10,
        backgroundColor: colors.orange, 
        borderRadius: 10,
      },
      btnText: {
        color: 'white',
        fontFamily: 'poppins',
        fontSize: 12,
      }
});

export default Button;