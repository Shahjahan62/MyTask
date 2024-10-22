import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GlobalText from './components/Text/GlobalText';
import {colors} from './theme/colors';
interface GradientButtonProps {
  title: string;
  onPress: () => void;
  isActive?: boolean;
  style?: ViewStyle;
  isAdd?: boolean;
}

const ChooseGenderButton: React.FC<GradientButtonProps> = ({
  title,
  onPress,
  isActive,
  style,
  isAdd,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.buttonContainer}>
      {isActive ? (
        <LinearGradient
          colors={['#DA22FF', '#9733EE', '#49A2D8']}
          style={[styles.gradientBorder, {borderRadius: isAdd ? 25 : 10}]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}>
          <View style={[styles.innerButton]}>
            <LinearGradient
              colors={['#6F2C7A', '#000', '#6F2C7A']}
              style={[styles.radialGradient, style]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              locations={[0, 0.6, 1]}>
              <GlobalText variant="body">{title}</GlobalText>
            </LinearGradient>
          </View>
        </LinearGradient>
      ) : (
        <View style={styles.normalButton}>
          <GlobalText variant="body" style={styles.buttonText2}>
            {title}
          </GlobalText>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
  },
  gradientBorder: {
    borderRadius: 10,
    padding: 1.5,
  },
  radialGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 22,
    paddingVertical: 6,
  },
  innerButton: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  normalButton: {
    borderRadius: 10,
    backgroundColor: colors.inputBackground, // Normal button background color
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingVertical: 6,
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: colors.lightGrey,
  },
  buttonText2: {
    color: '#d9cece',
    fontWeight: '600',
  },
});

export default ChooseGenderButton;
