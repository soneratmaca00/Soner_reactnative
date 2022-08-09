import * as React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Edit from 'react-native-vector-icons/MaterialIcons';
import {colors, spacing} from '../consts/consts';
import Typography from './Typography';
import {useNavigation} from '@react-navigation/native';

function ProductCard({onPress, product}) {
  const navigation = useNavigation();

  const onPressProduct = () => {
    navigation.navigate('DetailPage', {id: product?._id});
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPressProduct}>
      <Image
        style={styles.image}
        source={{
          uri: product?.avatar,
        }}
      />
      <View style={styles.descriptionContainer}>
        <Typography color={colors.white} numberOfLines={1}>
          {product?.name}
        </Typography>
        <View style={styles.descriptionContainerInner}>
          <Typography color={colors.white}>${product?.price}</Typography>
          <Edit name="edit" size={20} color={colors.white} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingTop: spacing.s4,
    marginVertical: spacing.s4,
    marginHorizontal: spacing.s4,
    borderRadius: spacing.s12,
    backgroundColor: colors.white,
  },
  descriptionContainer: {
    backgroundColor: colors.black,
    width: '100%',
    padding: spacing.s6,
    borderRadius: spacing.s12,
    marginTop: spacing.s32,
  },
  descriptionContainerInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: '#000000',
    elevation: 10,
  },
  image: {height: 100, width: 100},
});
export default ProductCard;
