import { View, Text, Image, Dimensions} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './style';
import Button from '../../components/Button/Button';
import PetInfoContainer from '../../components/PetInfoContainer/PetInfoContainer';
import OwnerInfoContainer from '../../components/OwnerInfoContainer/OwnerInfoContainer';
import { fetchOwnerData } from '../../utils/ownerDataFetcher';

const PetInfoScreen = ({ route, navigation }) => {

  const {width} = Dimensions.get('window');
  const [ownerData, setOwnerData] = useState();

  const goToPetList = () => {
    navigation.navigate('Pet List');
  };

  const getOwnerData = async () => {
    try{
      const ownerData = await fetchOwnerData();
      setOwnerData(ownerData);
    }catch(error){
      console.log('Error loading owner data');
    };
  };

  useEffect(()=>{
    getOwnerData();
  }, [])

  return (
    <View style={styles.container}>
      {ownerData && (
        <>
          <View style={styles.petContainer}>
            <View style={styles.imgContainer}>
              <Image  
                source={{uri: route.params.img}} 
                style={{
                  width: width,
                  height: 300,
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                }}  
              />
            </View>
          </View>
          <View style={styles.infosContainer}>
            <PetInfoContainer name={route.params.name} sex={route.params.sex}/>
            <OwnerInfoContainer name={ownerData.name} location={ownerData.location} phoneNumber={ownerData.phone} picture={ownerData.picture}/>
            <Button text='Go back to pet list' onClick={goToPetList}/>
          </View>
        </>
      )}
    </View>
  );
  
};

export default PetInfoScreen;
