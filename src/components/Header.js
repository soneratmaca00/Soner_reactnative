import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors, spacing} from '../consts/consts';
import Typography from './Typography';

function Header() {
  return (
    <View style={styles.container}>
      <Typography variant={'title1'} color={colors.black}>
        UPayments Store
      </Typography>
      <Icon name="search" size={20} color={colors.black} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.s12,
    backgroundColor: colors.grey,
  },
});
export default Header;
