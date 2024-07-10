import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {height, width} from '../utils/constants';
import {AppColors} from '../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../utils/routes';

const Introduction = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/int1.png')}
        style={styles.image}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate(PRODUCTLIST)}
        style={styles.btn}>
        <Text style={styles.textBtn}>Shop Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
  },
  image: {
    width: width - 30,
    height: height / 4,
    resizeMode: 'cover',
  },
  btn: {
    position: 'absolute',
    bottom: 50,
    right: 10,
    backgroundColor: AppColors.YELLOW,
    width: width * 0.3,
    height: height * 0.035,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textBtn: {
    color: AppColors.BLACK,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Introduction;
