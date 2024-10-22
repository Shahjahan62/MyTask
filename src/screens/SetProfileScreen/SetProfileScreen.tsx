import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import GradientVew from '../../components/GradientView./GradientView';
import {ProfileImage} from '../../../assets/images/images';
import GlobalText from '../../components/Text/GlobalText';
import Input from '../../components/Input/Input';

const SetProfileScreen = () => {
  const [username, setUsername] = useState('');
  const [AddBio, setAddBio] = useState('');

  return (
    <GradientVew style={{padding: 10}}>
      <View style={{alignItems: 'center'}}>
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
    </GradientVew>
  );
};

export default SetProfileScreen;

const styles = StyleSheet.create({});
