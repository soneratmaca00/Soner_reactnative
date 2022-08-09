import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors, spacing} from '../consts/consts';
import Typography from './Typography';

const themes = {
  black: {
    backgroundColor: colors.black,
    textColor: colors.white,
  },
  white: {
    backgroundColor: colors.white,
    textColor: colors.black,
  },
};
function Button({onPress, theme = 'black', children, containerStyle}) {
  const choosenTheme = themes[theme];
  return (
    <TouchableOpacity onPress={onPress}>
      <Typography
        containerStyle={[
          styles.container,
          {backgroundColor: choosenTheme.backgroundColor},
          containerStyle,
        ]}
        variant={'body0'}
        color={choosenTheme.textColor}>
        {children}
      </Typography>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.s6,
    borderRadius: spacing.s6,
    shadowColor: colors.black,
    shadowOpacity: 0.4,
    elevation: 10,
    borderColor: colors.black,
    borderWidth: 1,
    marginRight: spacing.s6,
  },
});
export default Button;
