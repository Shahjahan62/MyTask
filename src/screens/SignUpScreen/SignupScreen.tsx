import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import GradientVew from '../../components/GradientView./GradientView';
import Input from '../../components/Input/Input';
import CountryPickerInput from '../../components/CountryPicker/CountryPickerInput';
import DatePickerInput from '../../components/DatePicker/DateTimeInput';
import ChooseGenderButton from '../../ChooseGenderButton';
import GradientButton from '../../components/GradientButton';
import GlobalText from '../../components/Text/GlobalText';
import {colors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [countryCode, setCountryCode] = useState('US');
  const [callingCode, setCallingCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [activeGender, setActiveGender] = useState<string | null>('male');

  const onSelect = country => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
    setPickerVisible(false);
  };

  const handleGenderPress = (gender: string) => {
    setActiveGender(gender);
  };

  const Array = ['male', 'female', 'Rather not say'];

  const handleSignin = () => {
    navigation.navigate('OTPverifyScreen');
  };

  return (
    <GradientVew style={{padding: 10}}>
      <Header title="SignUp" pageNumber={'2'} />
      <Input
        label="Username"
        value={username}
        onChangeText={setUsername}
        placeholder="Type your full name"
      />
      <CountryPickerInput
        countryCode={countryCode}
        callingCode={callingCode}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        isPickerVisible={isPickerVisible}
        setPickerVisible={setPickerVisible}
        onSelect={onSelect}
      />

      <DatePickerInput />
      <View style={styles.rowButton}>
        {Array.map((item, index) => (
          <ChooseGenderButton
            key={index}
            title={item}
            onPress={() => handleGenderPress(item)}
            isActive={activeGender === item}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <GradientButton title="Create account" onPress={() => {}} />
        <View style={styles.rowText}>
          <GlobalText variant="h3">Already have an account?</GlobalText>
          <TouchableOpacity onPress={handleSignin}>
            <GlobalText variant="h3" style={styles.text}>
              Sign in
            </GlobalText>
          </TouchableOpacity>
        </View>
      </View>
    </GradientVew>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  rowButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignSelf: 'center',
  },
  text: {
    color: colors.primary,
    marginLeft: 5,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  rowText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
