import React, {useContext} from 'react';
import {SearchNormal, ShoppingCart} from 'iconsax-react-native';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import {AppColors} from '../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {CART} from '../utils/routes';
import Badge from '../components/cart/badge';
import StoreContex from '../context';

const HeaderTabRight = () => {
  const navigation = useNavigation();
  const {cart} = useContext(StoreContex);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.icon}>
        <SearchNormal size={28} color={AppColors.BLACK} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(CART)}
        style={styles.icon}>
        {cart?.length > 0 && <Badge count={cart?.length} />}
        <ShoppingCart size={28} color={AppColors.BLACK} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 5,
    alignItems: 'center',
  },
  icon: {marginHorizontal: 8},
});

export default HeaderTabRight;
