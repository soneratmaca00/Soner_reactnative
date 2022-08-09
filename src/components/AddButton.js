import * as React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import AddIcon from 'react-native-vector-icons/Ionicons';
import {colors, spacing} from '../consts/consts';

const ButtonHeight = 40;

function AddButton({onPress, children}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AddIcon name="add" size={ButtonHeight} color={colors.black} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: ButtonHeight / 2,
    borderColor: colors.black,
    borderWidth: 1,
    height: ButtonHeight,
    width: ButtonHeight,
    position: 'absolute',
    bottom: spacing.s18,
    right: spacing.s32,
    zIndex: 12,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default AddButton;
