// GlobalText.js
import React, {PropsWithChildren, ReactNode} from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';

interface Props {
  style?: TextStyle;
  children?: ReactNode;
  variant?: string;
}

const GlobalText = ({style, variant, children, ...props}: Props) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'h1':
        return styles.h1;
      case 'h2':
        return styles.h2;
      case 'h3':
        return styles.h3;
      default:
        return styles.body;
    }
  };
  return (
    <Text style={[getVariantStyle(), style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontFamily: 'Urbanist-Bold',
    color: 'white',
  },
  h2: {
    fontSize: 18,
    fontFamily: 'Urbanist-Semibold',
    color: 'white',
  },
  h3: {
    fontSize: 14,
    fontFamily: 'Urbanist-Regular',
    color: 'white',
  },
  body: {
    fontSize: 16,
    fontFamily: 'Urbanist-Regular',
    color: 'white',
  },
});

export default GlobalText;
