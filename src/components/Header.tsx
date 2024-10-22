import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalText from './Text/GlobalText';
import {colors} from '../theme/colors';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  title: string;
  pageNumber: number | string;
}

const Header = ({title, pageNumber}: HeaderProps) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleBack}>
        <Ionicons name="chevron-back-outline" size={24} color="white" />
      </TouchableOpacity>
      <GlobalText variant="h2">{title}</GlobalText>
      <TouchableOpacity style={styles.button}>
        <GlobalText variant="h3">1/{pageNumber}</GlobalText>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.lightGrey,
  },
});
