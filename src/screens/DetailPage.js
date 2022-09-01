import * as React from 'react';
import {View, ActivityIndicator, StyleSheet, Image} from 'react-native';
import {colors, spacing} from '../consts/consts';
import Typography from '../components/Typography';
import {singleProductURL} from '../consts/urls';
import useFetch from '../hooks/useFetch';

const imageHeight = 200;

function DetailPage({route}) {
  const {id} = route.params;
  const {data: productDetail, loading} = useFetch(singleProductURL + id);
  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: productDetail?.avatar,
              }}
            />
          </View>
          <View style={styles.detailContainer}>
            <View style={styles.nameContainer}>
              <Typography
                color={colors.white}
                numberOfLines={1}
                variant="title2">
                {productDetail?.name}
              </Typography>
              <Typography
                color={colors.white}
                numberOfLines={1}
                variant="title2">
                ${productDetail?.price}
              </Typography>
            </View>
            <Typography color={colors.white} numberOfLines={1} variant="body3">
              {productDetail?.description}
            </Typography>
          </View>
        </View>
      )}
    </View>
  );
}

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
  },
  image: {height: imageHeight, width: imageHeight},
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: spacing.s64,
    backgroundColor: colors.grey,
  },
  detailContainer: {
    marginTop: spacing.s48,
    backgroundColor: colors.black,
    flex: 1,
    borderTopLeftRadius: spacing.s24,
    borderTopRightRadius: spacing.s24,
    paddingHorizontal: spacing.s18,
    paddingTop: spacing.s24,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: -12},
    shadowRadius: 10,
    elevation: 24,
  },
  nameContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.s18,
    paddingHorizontal: spacing.s6,
  },
});
