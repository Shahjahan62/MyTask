import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import GradientVew from '../../components/GradientView./GradientView';
import {ProfileImage} from '../../../assets/images/images';
import GlobalText from '../../components/Text/GlobalText';
import Input from '../../components/Input/Input';
import GradientButton from '../../components/GradientButton';
import {useNavigation} from '@react-navigation/native';

const SetProfileScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [AddBio, setAddBio] = useState('');
  const handleDone = () => {
    navigation.navigate('AddFriendScreen');
  };
  return (
    <GradientVew style={{padding: 10}}>
      <View style={{alignItems: 'center', marginTop: 40}}>
        <Image source={ProfileImage} />
        <GlobalText variant="h3">Upload photo</GlobalText>
      </View>
      <Input
        placeholder={'@username'}
        onChangeText={() => setUsername('')}
        value={username}
        label={'Username'}
      />

      <Input
        value={AddBio}
        onChangeText={() => setAddBio('')}
        placeholder={'Add bio'}
        label={'Add bio'}
        multiline={true}
        numberOfLines={6}
      />
      <GradientButton
        style={styles.buttonStyle}
        title="Done"
        onPress={handleDone}
      />
    </GradientVew>
  );
};

export default SetProfileScreen;

const styles = StyleSheet.create({
  buttonStyle: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignSelf: 'center',
  },
});
