import React, { useEffect, useState } from 'react';
import {FlatList } from 'react-native';
import {fetchPetsData, fetchPetsImages} from '../../utils/petDataFetcher';
import { Pet } from '../../models/Pet';
import PetCard from '../../components/PetCard/PetCard';

const PetListScreen = ({ navigation }) => {

  const [petsData, setPetsData] = useState([]); 

  const getPetsData = async () => {
   try{
      const petsImgs = await fetchPetsImages();
      const petsData = await fetchPetsData(); 
      const pets = petsData.map((petData, index) => {
        return new Pet(petData.name, petData.sex, petsImgs[index]);
      });
      setPetsData(pets);
   } catch(error){
      console.log('Error loading pet data');
   }
  };
  useEffect(() => {
    getPetsData();
  }, []);
  return (
    <FlatList
      data={petsData}
      renderItem={({ item }) => 
      <PetCard 
      navigation={navigation}
      name={item.name} 
      img={item.img} 
      sex={item.sex}
      />}
    />
  );
};

export default PetListScreen;
