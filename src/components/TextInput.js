import * as React from 'react';
import {View, Image, StyleSheet, TextInput} from 'react-native';
import {colors, spacing} from '../consts/consts';
import Typography from './Typography';

function CustomTextInput({
  keyboardType,
  handleChange,
  placeholder,
  value,
  multiline,
  height,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        {value && (
          <Typography color={colors.darkGrey} numberOfLines={1} variant="body3">
            {placeholder}
          </Typography>
        )}
      </View>
      <TextInput
        style={[styles.input, {height: height}]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={text => handleChange(text)}
        value={value}
        multiline={multiline}
        numberOfLines={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.grey,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: spacing.s12,
    width: '100%',
    borderRadius: spacing.s12,
    textAlignVertical: 'top',
  },
  label: {
    paddingLeft: spacing.s6,
    width: '100%',
    height: spacing.s18,
  },
});
export default CustomTextInput;
