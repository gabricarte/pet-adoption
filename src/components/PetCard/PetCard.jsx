import { View, Text, Image } from 'react-native'
import React from 'react'
import Button from '../Button/Button'
import styles from './style'

const petCard = ({navigation, name, img, sex}) => {
  const goToPetInfoScreen = () => {
    navigation.navigate('Pet Info', { name: name, sex: sex, img: img });
  };
  return (
    <View style={styles.petContainer}>
      <View style={styles.imgContainer}>
        <Image  
        source={{uri: img}} 
        style={{width: 180, height: 180, borderRadius: 20}}  
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{sex}</Text>
        <Button text='more info' onClick={goToPetInfoScreen}></Button>
      </View>
    </View>
  );
};

export default petCard;