import React, {useContext} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import StoreContex from '../../context';
import CartCard from '../../components/cart/cartCard';
import {screenStyle} from '../../styles/screenStyle';
import Summary from '../../components/cart/summary';

const Cart = () => {
  const {cart} = useContext(StoreContex);
  return (
    <View style={screenStyle.container}>
      <FlatList
        keyExtractor={item => item?.id}
        contentContainerStyle={{paddingBottom: 20, paddingTop: 10}}
        showsVerticalScrollIndicator={false}
        data={cart}
        renderItem={({item}) => <CartCard item={item} />}
      />
      <Summary />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Cart;
