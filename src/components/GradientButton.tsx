import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
type GradientButtonProps = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  colors?: string[];
};

const GradientButton: React.FC<GradientButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  colors = ['#ff0080', '#7928ca', '#2c9cdb'],
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, style]}>
      <LinearGradient
        style={styles.gradient}
        colors={colors}
        locations={[0, 0.6, 1]} // Control the distribution of colors
        start={{x: 0, y: 0}} // Top-left corner
        end={{x: 1, y: 1}} // Bottom-right corner (diagonal gradient)/ Midpoint for the center color
      >
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  gradient: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default GradientButton;
