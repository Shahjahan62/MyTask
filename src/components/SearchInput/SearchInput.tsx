import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Use the Ionicons library
import {colors} from '../../theme/colors';
import {Svg, SvgXml} from 'react-native-svg';
import {FilterIcon} from '../../../assets/icons/icons';

interface Props {
  searchFriend?: boolean;
  filterSearch?: boolean;
}

const SearchInput = ({searchFriend, filterSearch}: Props) => {
  return (
    <View style={styles.container}>
      <Icon
        name="search"
        size={20}
        color={colors.inputPlaceholder}
        style={styles.icon}
      />
      <TextInput
        placeholder="Search..."
        placeholderTextColor="#A9A9A9" // Light gray for placeholder text
        style={styles.input}
      />
      {filterSearch && <SvgXml width="20" height="20" xml={FilterIcon} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBackground, // Dark background color
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1, // Take the remaining space
    color: '#FFFFFF', // Text color
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  icon: {
    paddingHorizontal: 5, // Space around icons
  },
});

export default SearchInput;
