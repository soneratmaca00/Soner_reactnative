import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import AddButton from '../components/AddButton';
import FilterList from '../components/FilterList';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import {categoriesURL, productsURL} from '../consts/urls';
import useFetch from '../hooks/useFetch';

function Home() {
  const navigation = useNavigation();
  const [filteredProducts, setFilteredProducts] = React.useState();
  const [selectedCategory, setSelectedCategory] = React.useState(true);

  const {data: products, loading} = useFetch(productsURL);
  const {data: categories} = useFetch(categoriesURL);

  React.useEffect(() => {
    const filterProducts = products?.filter(item => {
      return item?.category === selectedCategory;
    });
    setFilteredProducts(filterProducts);
  }, [selectedCategory, products]);

  const handleChange = item => {
    setSelectedCategory(item);
  };
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
