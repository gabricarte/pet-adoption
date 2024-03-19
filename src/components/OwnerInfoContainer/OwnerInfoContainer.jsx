import { View, Text, Image} from 'react-native';
import React from 'react';
import styles from './style';

const OwnerInfoContainer = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.ownerHeader}>
            <Image  
            source={{uri: props.picture}} 
            style={{width: 90, height: 90, borderRadius: 400}}  
            />
            <View style={styles.nameContainer}>
                <Text style={styles.ownerName}>{props.name}</Text>
                <Text style={styles.ownerSubtitle}>Owner</Text>
            </View>
            <View>
                <Text>{props.location}</Text>
            </View>
        </View>
        <View style={styles.ownerBody}>
            <Text style={styles.ownerBodyText}>Phone: {props.phoneNumber}</Text>
        </View>
    </View>
  );
};

export default OwnerInfoContainer;