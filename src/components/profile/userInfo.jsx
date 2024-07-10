import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {height, width} from '../../utils/constants';
import {AppColors} from '../../theme/colors';

const UserInfo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/user1.webp')}
        style={styles.image}
      />
      <Text style={styles.textUser}>Hayel Pay</Text>
      <Text style={styles.textInfo}>Mobile Developer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: height / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.35,
    height: width * 0.35,
    resizeMode: 'contain',
    marginVertical: 5,
    borderRadius: 1000,
  },
  textUser: {
    fontWeight: '800',
    fontSize: 20,
    marginVertical: 10,
  },
  textInfo: {
    fontWeight: '500',
    fontSize: 14,
    color: AppColors.GRAY,
  },
});

export default UserInfo;
