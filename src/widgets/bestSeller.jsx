import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import WidgetTitle from '../components/widgets/widgetTitle';
import {getRequest} from '../service/verbs';
import {CATEGORY_URL} from '../service/urls';
import WidgetProductCard from '../components/widgets/widgetProductCard';
import SelectCategory from '../components/widgets/selectCategory';

const BestSeller = () => {
  const [products, setProducts] = useState([]);

  const getBestSellerProducts = (category = "men's clothing") => {
    getRequest(CATEGORY_URL + `/${category}`, {limit: 5})
      .then(response => {
        // console.log('data', response.data);
        setProducts(response.data);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  useEffect(() => {
    getBestSellerProducts();
  }, []);

  return (
    <View style={styles.container}>
      <WidgetTitle title={'Best Seller'} category="men's clothing" />
      <SelectCategory onSelect={value => getBestSellerProducts(value)} />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={products}
        renderItem={({item}) => <WidgetProductCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BestSeller;
