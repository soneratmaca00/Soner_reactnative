import * as React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {colors, spacing} from '../consts/consts';
import ProductCard from './ProductCard';
import Typography from './Typography';

function ProductList({products}) {
  const EmptyListComponent = () => {
    return (
      <View style={{flex: 1}}>
        <Typography color={colors.black} numberOfLines={1}>
          There is no product on that category
        </Typography>
      </View>
    );
  };
  const renderItem = ({item}) => {
    return <ProductCard product={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        ListEmptyComponent={<EmptyListComponent />}
        data={products}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        style={styles.flatlistStyle}
        scrollEventThrottle={1}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.s12,
    paddingTop: spacing.s12,
    backgroundColor: colors.grey,
    flex: 1,
  },
  columnWrapper: {
    justifyContent: 'space-evenly',
  },
  flatlistStyle: {
    marginBottom: spacing.s32,
  },
});

export default ProductList;
