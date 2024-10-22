import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GlobalText from './Text/GlobalText';
interface GradientButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

const RadialGradientButton: React.FC<GradientButtonProps> = ({
  title,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.buttonContainer, style]}>
      <LinearGradient
        colors={['#DA22FF', '#9733EE', '#49A2D8']}
        style={styles.gradientBorder}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}>
        <View style={styles.innerButton}>
          <LinearGradient
            colors={['#6F2C7A', '#000', '#6F2C7A']}
            style={{
              width: '100%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
            }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            locations={[0, 0.6, 1]}>
            <GlobalText variant="h2">{title}</GlobalText>
          </LinearGradient>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '90%',
    height: 60,
  },
  gradientBorder: {
    borderRadius: 25,
    padding: 2,
  },
  innerButton: {
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default RadialGradientButton;
