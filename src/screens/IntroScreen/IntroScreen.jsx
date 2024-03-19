import { View, Text, Image} from 'react-native';
import Button from '../../components/Button/Button';
import styles from './style';

const IntroScreen = ({navigation}) => {
  const goToPetList = () => {
    navigation.navigate('Pet List');
  };
  return (
    <View style={styles.container}>
      <View>
        <Image  
        source={require('../../../assets/imgs/walk-dog.png')} 
        style={{width: 300, height: 400}}  
        />
        <Text style={styles.title}>Find a pet to adopt! </Text>
        <Text style={styles.subtitle}>Get the current owner information</Text>
      </View>
      <Button text='Start now' onClick={goToPetList}></Button>
    </View>
  );
};

export default IntroScreen;