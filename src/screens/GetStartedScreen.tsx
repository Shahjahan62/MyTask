import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import GradientButton from '../components/GradientButton';
import {colors} from '../theme/colors';
import {SplashImage} from '../../assets/images/images';
import {BlurView} from '@react-native-community/blur';
import GlobalText from '../components/Text/GlobalText';
const GetStartedScreen = () => {
  const handlePress = () => {
    console.log('Button Pressed!');
  };

  return (
    <View style={styles.container}>
      <Image source={SplashImage} />
      <BlurView
        style={styles.absolute}
        blurType="light" // Types: 'light', 'dark', 'xlight', 'prominent'
        blurAmount={1}
      />
      <View style={{paddingHorizontal: 10}}>
        <GlobalText variant="h1" style={{textAlign: 'center'}}>
          Find your crew. Discover {'\n'} your scene
        </GlobalText>
        <GlobalText
          variant="h3"
          style={{textAlign: 'center', marginVertical: 10}}>
          Connect with friends and find fun places to hang out.
        </GlobalText>
        <GradientButton title="Get started" style={{marginTop: 5}} />
      </View>
    </View>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,

    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  // container: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   margin: 20,
  // },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: '#000',
  },
  iconContainer: {
    padding: 10,
  },
  absolute: {
    marginTop: -100,
    height: 120,
    width: '100%',
  },
});
