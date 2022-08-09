import * as React from 'react';
import {View, Text, ActivityIndicator, StyleSheet, Image} from 'react-native';
import {colors, spacing} from '../consts/consts';
import CustomTextInput from '../components/TextInput';
import Typography from '../components/Typography';
import FilterList from '../components/FilterList';
import {Context} from '../context/Context';
import Button from '../components/Button';
import {token} from '../consts/config';
import {useNavigation} from '@react-navigation/native';

function AddProduct({}) {
  const [productTitle, setProductTitle] = React.useState();
  const [price, setPrice] = React.useState();
  const [description, setDescription] = React.useState();
  const [imageLink, setImageLink] = React.useState();
  const [selectedCategory, setSelectedCategory] = React.useState();
  const {categories} = React.useContext(Context);
  const navigation = useNavigation();

  const handleChange = item => {
    setSelectedCategory(item);
  };
  const handleAddProduct = () => {
    // for developer email field I have tried to put over header, body etc. but it gives error like "developerEmail field value does not match with the email in the token!"
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    myHeaders.append('DeveloperEmail', 'soneratmaca00@gmail.com');

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        DeveloperEmail: 'soneratmaca00@gmail.com',
      }),
    };

    fetch(
      `https://upayments-studycase-api.herokuapp.com/api/products?Name=${productTitle}&Price=${price}&Category=${selectedCategory}&Description=${description}&Avatar=${imageLink}&DeveloperEmail=soneratmaca00@gmail.com`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        result.message === 'success' && navigation.navigate('Home');
      })
      .catch(error => console.log('error', error));
  };
  return (
    <View style={styles.container}>
      <View>
        <CustomTextInput
          value={productTitle}
          placeholder={'Product Title'}
          handleChange={setProductTitle}
          height={40}
        />
        <CustomTextInput
          value={price}
          placeholder={'Price'}
          handleChange={setPrice}
          keyboardType="numeric"
          height={40}
        />
        <CustomTextInput
          value={description}
          placeholder={'Description'}
          handleChange={setDescription}
          multiline={true}
          height={100}
        />
        <CustomTextInput
          value={imageLink}
          placeholder={'Image Link'}
          handleChange={setImageLink}
          height={40}
        />
        <Typography
          color={colors.black}
          numberOfLines={1}
          variant="body2"
          containerStyle={styles.selectedCategory}>
          Selected Category: {selectedCategory}
        </Typography>
        <FilterList
          data={categories}
          onPress={handleChange}
          selectedCategory={selectedCategory}
        />
      </View>
      <Button
        containerStyle={{marginLeft: spacing.s72 * 2}}
        onPress={handleAddProduct}>
        Add Product
      </Button>
    </View>
  );
}

export default AddProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
    paddingHorizontal: spacing.s12,
    justifyContent: 'space-between',
    paddingBottom: spacing.s18,
  },
  selectedCategory: {
    marginTop: spacing.s16,
    marginBottom: spacing.s16,
  },
});
