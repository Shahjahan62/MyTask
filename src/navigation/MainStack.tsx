import {StyleSheet} from 'react-native';
import React from 'react';
import AddFriendScreen from '../screens/AddFriendScreen/AddFriendScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStartedScreen from '../screens/GetStartedScreen';
import SignupScreen from '../screens/SignUpScreen/SignupScreen';
import OTPverifyScreen from '../screens/OTPverify/OTPverifyScreen';
import SetProfileScreen from '../screens/SetProfileScreen/SetProfileScreen';
const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="OTPverifyScreen" component={OTPverifyScreen} />
        <Stack.Screen name="SetProfileScreen" component={SetProfileScreen} />

        <Stack.Screen name="AddFriendScreen" component={AddFriendScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
