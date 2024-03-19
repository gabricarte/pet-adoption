import { View, Text } from 'react-native';
import React from 'react';
import styles from './style';

const PetInfoContainer = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}> 
          <Text style={styles.title}>Name</Text>
          <Text style={styles.infoText}>{props.name}</Text>
      </View>
          <View style={styles.infoContainer}> 
          <Text style={styles.title}>Sex</Text>
          <Text style={styles.infoText}>{props.sex}</Text>
      </View>
    </View>
  );
};

export default PetInfoContainer;