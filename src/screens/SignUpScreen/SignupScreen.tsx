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

const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [countryCode, setCountryCode] = useState('US'); // Default to United States
  const [callingCode, setCallingCode] = useState('1'); // Default calling code for US
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPickerVisible, setPickerVisible] = useState(false);

  const onSelect = country => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
    setPickerVisible(false); // Close picker after selection
  };
  const [activeGender, setActiveGender] = useState<string | null>(null);

  const handleGenderPress = (gender: string) => {
    setActiveGender(gender);
  };

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);

    // Format the date to a readable string (e.g., "YYYY-MM-DD")
    const formatted = currentDate.toISOString().split('T')[0];
    setFormattedDate(formatted);
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
        {['male', 'female', 'Rather not say'].map(item => (
          <ChooseGenderButton
            title={item}
            onPress={() => handleGenderPress(item)}
            isActive={activeGender === item}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <GradientButton title="Create account" onPress={() => {}} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <GlobalText variant="h3">Already have an account?</GlobalText>
          <TouchableOpacity>
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
});
