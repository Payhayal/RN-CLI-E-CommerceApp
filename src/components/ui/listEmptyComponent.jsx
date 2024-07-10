import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppColors} from '../../theme/colors';
import {height} from '../../utils/constants';
import {Button} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../../utils/routes';

const ListEmptyComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>You haven`t added any products yet!</Text>
      </View>
      <Button
        onPress={() => navigation.navigate(PRODUCTLIST)}
        style={styles.Btn}
        status="success">
        All Products
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height / 2,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'italic',
    color: AppColors.PRIMARY,
  },
  Btn: {
    marginVertical: 20,
  },
});

export default ListEmptyComponent;
