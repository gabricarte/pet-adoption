import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroScreen from '../screens/IntroScreen/IntroScreen';
import PetListScreen from '../screens/PetListScreen/PetListScreen';
import PetInfoScreen from '../screens/PetInfoScreen/PetInfoScreen';

const Stack = createNativeStackNavigator(); 

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Intro" 
          component={IntroScreen}    
          options={{headerShown: false}}        
        />
        <Stack.Screen 
          name="Pet List" 
          component={PetListScreen}
          options={{headerShown: true}}   
        />
        <Stack.Screen 
          name="Pet Info" 
          options={{headerShown: false}}   
          component={PetInfoScreen}         
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
