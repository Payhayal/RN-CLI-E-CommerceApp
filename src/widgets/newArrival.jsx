import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import WidgetTitle from '../components/widgets/widgetTitle';
import {getRequest} from '../service/verbs';
import {CATEGORY_URL} from '../service/urls';
import WidgetProductCard from '../components/widgets/widgetProductCard';

const NewArrival = () => {
  const [products, setProducts] = useState([]);

  const getNewArrivalProducts = () => {
    getRequest(CATEGORY_URL + "/women's clothing", {limit: 5, sort: 'asc'})
      .then(response => {
        // console.log('data', response.data);
        setProducts(response.data);
      })
      .catch(error => {
        console.log('error', error);
      });
  };
  useEffect(() => {
    getNewArrivalProducts();
  }, []);

  return (
    <View style={styles.container}>
      <WidgetTitle title={'New Arrival'} category="women's clothing" />
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

export default NewArrival;
