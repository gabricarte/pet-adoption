import AsyncStorage from '@react-native-async-storage/async-storage'; 

export const savePets = async (pets) =>{
    try{
      await AsyncStorage.setItem('pets', {pets})
      Alert.alert('Pets saved!')
    }catch(error){
      console.log(error);
    }
  }

export const getPets = async () =>{
    try{
      const value = await AsyncStorage.getItem('pets')
      Alert.alert('Data saved: ', value)
    }catch(error){
      console.log(error);
    }
  }