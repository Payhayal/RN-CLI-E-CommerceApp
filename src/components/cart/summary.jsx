import React, {useContext} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import CustomBtn from '../ui/customBtn';
import {AppColors} from '../../theme/colors';
import StoreContex from '../../context';
import {useNavigation} from '@react-navigation/native';
import {CHECKOUT, SIGNIN} from '../../utils/routes';

const Summary = () => {
  const {isSignIn, cart} = useContext(StoreContex);
  const navigation = useNavigation();

  function totalPrice() {
    return cart.reduce((acc, product) => acc + product.price, 0);
  }

  const checkOut = () => {
    if (isSignIn) {
      navigation.navigate(CHECKOUT);
    } else {
      Alert.alert('Sign in', 'Please sign in to purchase products!', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Sign in', onPress: () => navigation.navigate(SIGNIN)},
      ]);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.subtotal}>
        <Text style={styles.name}>Subtotal :</Text>
        <Text style={styles.text}>$800.00</Text>
      </View>
      <View style={styles.deliveryFee}>
        <Text style={styles.name}>Delivery Fee :</Text>
        <Text style={styles.text}>$10.00</Text>
      </View>
      <View style={styles.discount}>
        <Text style={styles.name}>Discount :</Text>
        <Text style={styles.text}>10%</Text>
      </View>
      <View style={styles.total}>
        <Text style={styles.name}>Total :</Text>
        <Text style={styles.text}>${totalPrice()}</Text>
      </View>
      <CustomBtn onPress={checkOut} title="Check out" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: AppColors.SOFTGRAY,
  },
  name: {
    color: AppColors.GRAY,
    fontSize: 16,
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
  },
  subtotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  deliveryFee: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  discount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
});

export default Summary;
