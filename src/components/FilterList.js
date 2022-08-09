import * as React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, spacing} from '../consts/consts';
import Typography from './Typography';

function FilterList({data, onPress, selectedCategory}) {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => onPress(item.name)}>
        <Typography
          containerStyle={[
            styles.itemContainer,
            {
              backgroundColor:
                selectedCategory === item.name ? 'white' : 'black',
            },
          ]}
          variant={'body0'}
          color={selectedCategory === item.name ? 'black' : 'white'}>
          {item.name}
        </Typography>
    </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: spacing.s12,
  },
  itemContainer: {
    padding: spacing.s6,
    borderRadius: spacing.s6,
    shadowColor: colors.black,
    shadowOpacity: 0.4,
    elevation: 10,
    borderColor: colors.black,
    borderWidth: 1,
    marginRight: spacing.s6,
  }
});

export default FilterList;
