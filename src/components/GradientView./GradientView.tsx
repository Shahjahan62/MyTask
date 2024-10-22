// GradientBackground.js
import React, {ReactNode} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  children: ReactNode;
  style?: ViewStyle;
}

const GradientVew = ({children, style}: Props) => {
  return (
    <LinearGradient
      colors={['#504569', '#000']}
      locations={[0, 0.3]}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={[styles.background, style]}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default GradientVew;
