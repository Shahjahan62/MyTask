import React from 'react';
import {Text, StyleSheet, TextStyle, ViewStyle} from 'react-native';

type HeadingProps = {
  text: string;
  style?: TextStyle;
  containerStyle?: ViewStyle;
  color?: string;
  align?: 'left' | 'center' | 'right'; // Alignment options
};

const Heading: React.FC<HeadingProps> = ({
  text,
  style,
  containerStyle,
  color = '#000',
  align = 'left',
}) => {
  return (
    <Text
      style={[
        {
          fontSize: 28,
          color: color,
          textAlign: align,

          fontFamily: 'Urbanist-Italic', // Use Urbanist Regular
        },
        style, // Allow additional style overrides
      ]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    paddingVertical: 10, // Optional container style for vertical padding
  },
});

export default Heading;
