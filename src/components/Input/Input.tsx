import React from 'react';
import {View, Text, TextInput, StyleSheet, ViewStyle} from 'react-native';
import GlobalText from '../Text/GlobalText';
import {colors} from '../../theme/colors';

interface Props {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  style?: ViewStyle;
  multiline?: boolean;
  numberOfLines?: number | string;
}

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  style,
  multiline,
  numberOfLines,
  secureTextEntry = false,
}: Props) => {
  return (
    <View style={styles.container}>
      {label && (
        <GlobalText variant="h3" style={styles.label}>
          {label}
        </GlobalText>
      )}
      {/* Show label if provided */}
      <TextInput
        textAlignVertical="top"
        numberOfLines={numberOfLines}
        multiline={multiline}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.textInput}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={colors.inputPlaceholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 5, // Label text color (customizable)
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    color: '#000', // Text color
    backgroundColor: colors.inputBackground,
    fontFamily: 'Urbanist-Regular', // Background color (customizable)
  },
});

export default Input;
