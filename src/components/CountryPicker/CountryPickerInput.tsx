import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../theme/colors';
import CountryPicker from 'react-native-country-picker-modal';
import {CallingCode, CountryCode} from '../../types/types';
import GlobalText from '../Text/GlobalText';

interface Props {
  countryCode: CountryCode;
  callingCode: CallingCode;
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  isPickerVisible: boolean;
  setPickerVisible: (value: boolean) => void;
  onSelect: (value: string) => void;
}

const CountryPickerInput = ({
  countryCode,
  callingCode,
  phoneNumber,
  setPhoneNumber,
  isPickerVisible,
  setPickerVisible,
  onSelect,
}: Props) => {
  return (
    <>
      <GlobalText variant="h3" style={{fontWeight: 'bold', marginVertical: 5}}>
        Contact
      </GlobalText>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.countryPicker}
          onPress={() => setPickerVisible(true)}>
          <View style={styles.flagContainer}>
            <CountryPicker
              {...{
                countryCode: countryCode,
                withFilter: true,
                withFlag: true,
                withCountryNameButton: false,
                withAlphaFilter: true,
                withCallingCode: true,
                withEmoji: true,
                onSelect,
              }}
              visible={isPickerVisible}
              onClose={() => setPickerVisible(false)}
            />
            <Text style={styles.countryCodeText}>+{callingCode}</Text>
          </View>
        </TouchableOpacity>

        <TextInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter phone number"
          style={styles.textInput}
          keyboardType="phone-pad"
          placeholderTextColor="#888"
        />
      </View>
    </>
  );
};

export default CountryPickerInput;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 10,
    backgroundColor: colors.inputBackground,
  },
  countryPicker: {
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  countryCodeText: {
    fontSize: 16,
    color: colors.inputPlaceholder,
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    fontFamily: 'Urbanist-Regular',
  },
});
