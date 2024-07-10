import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {PRODUCTS_URL} from '../../service/urls';
import {getRequest} from '../../service/verbs';
import ProductCard from '../../components/product/productCard';
import {screenStyle} from '../../styles/screenStyle';
import Spinner from '../../components/ui/spinner';
import SelectCategory from '../../components/widgets/selectCategory';

const ProductList = ({route}) => {
  const [products, setProducts] = useState([]);
  const [pending, setPending] = useState(false);
  const productCategory = route?.params?.category;
  // console.log(route?.params?.category);
  const getAllProducts = product => {
    const url = product ? PRODUCTS_URL + `/category/${product}` : PRODUCTS_URL;
    setPending(true);
    getRequest(url)
      .then(response => {
        // console.log('data', response.data);
        setProducts(response?.data);
      })
      .catch(error => {
        console.log('error', error);
      })
      .finally(() => {
        setPending(false);
      });
  };
  useEffect(() => {
    getAllProducts(productCategory);
  }, []);
  return (
    <View style={screenStyle.container}>
      <SelectCategory onSelect={value => getAllProducts(value)} />
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 60, paddingTop: 20}}
          numColumns={2}
          data={products}
          renderItem={({item}) => <ProductCard item={item} />}
        />
      )}
    </View>
  );
};

export default ProductList;
