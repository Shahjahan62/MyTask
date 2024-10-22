import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import GradientVew from '../../components/GradientView./GradientView';
import GlobalText from '../../components/Text/GlobalText';
import {colors} from '../../theme/colors';
import OTPTextInput from 'react-native-otp-textinput';
const OTPverifyScreen = () => {
  return (
    <GradientVew style={{padding: 15}}>
      <GlobalText variant="h1" style={{marginTop: 60}}>
        Please enter the verification code here
      </GlobalText>
      <OTPTextInput
        offTintColor={colors.lightGrey}
        tintColor={colors.lightGrey}
        textInputStyle={styles.otpTextStyle}
        containerStyle={styles.otpContainer}
      />
      <View style={styles.rowButton}>
        <TouchableOpacity style={styles.ResendBtn}>
          <GlobalText variant="h3" style={{color: colors.primary}}>
            Resend Code
          </GlobalText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.ResendBtn, {borderBottomColor: 'white'}]}>
          <GlobalText variant="h3">Receive code via Watsapp</GlobalText>
        </TouchableOpacity>
      </View>
    </GradientVew>
  );
};

export default OTPverifyScreen;

const styles = StyleSheet.create({
  ResendBtn: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.primary,
    alignSelf: 'flex-start',
  },
  rowButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  otpContainer: {
    width: '100%',
    height: 80,
    color: 'white',
    marginTop: 20,
  },
  otpTextStyle: {
    width: '20%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    color: 'white',
    backgroundColor: colors.inputBackground,
  },
});
