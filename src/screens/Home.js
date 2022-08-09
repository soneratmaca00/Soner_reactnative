import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import AddButton from '../components/AddButton';
import FilterList from '../components/FilterList';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import {token} from '../consts/config';
import { Context } from '../context/Context';

function Home() {
  const navigation = useNavigation();
  const [products, setProducts] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const {categories, setCategories} = React.useContext(Context);
  const [filteredProducts, setFilteredProducts] = React.useState();
  const [selectedCategory, setSelectedCategory] = React.useState(true);

  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  const getProducts = () => {
    fetch(
      'https://upayments-studycase-api.herokuapp.com/api/products',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        setProducts(result?.products);
        setLoading(false);
      })
      .catch(error => console.log('error', error));
  };
  const getCategories = () => {
    fetch(
      'https://upayments-studycase-api.herokuapp.com/api/categories/',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => setCategories(result?.categories.reverse()))
      .catch(error => console.log('error', error));
  };

  React.useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  React.useEffect(() => {
    const filterProducts = products?.filter(item => {
      return item?.category === selectedCategory;
    });
    setFilteredProducts(filterProducts);
  }, [selectedCategory, products]);

  const handleChange = (item) => {
    setSelectedCategory(item)
  }
  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <>
          <Header />
          <FilterList
            data={categories}
            onPress={handleChange}
            selectedCategory={selectedCategory}
          />
          <ProductList
            products={selectedCategory === 'all' ? products : filteredProducts}
          />
          <AddButton onPress={() => navigation.navigate('AddProduct')} />
        </>
      )}
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
