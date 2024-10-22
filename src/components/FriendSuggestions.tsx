import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../theme/colors';
import {DisplayPicture} from '../../assets/images/images';
import GlobalText from './Text/GlobalText';
import ChooseGenderButton from '../ChooseGenderButton';

const FriendSuggestions = () => {
  return (
    <View style={styles.container}>
      <Image source={DisplayPicture} />
      <GlobalText variant="h2">Marc T</GlobalText>
      <GlobalText
        variant="h3"
        style={{marginBottom: 5, color: colors.lightGrey}}>
        @username
      </GlobalText>
      <ChooseGenderButton
        title="Add"
        isActive={true}
        isAdd
        style={{borderRadius: 25, paddingHorizontal: 40}}
      />
    </View>
  );
};

export default FriendSuggestions;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.inputBackground,
    width: '47%',
    height: 200,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: colors.lightGrey,
  },
});
