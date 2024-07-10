import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {AppColors} from '../../theme/colors';
import {width} from '../../utils/constants';
import Counter from '../ui/counter';

const CartCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: item?.image,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {item?.title}
        </Text>
        <Text style={styles.category}>{item?.category}</Text>
        <Text style={styles.title}>${item?.price}</Text>
      </View>
      <View style={styles.countContainer}>
        <Counter onChange={value => console.log(value)} size={22} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    borderStartColor: AppColors.SOFTGRAY,
    borderStartWidth: 3,
    borderEndStartRadius: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 2,
    paddingHorizontal: 5,
  },
  countContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  image: {
    width: width * 0.17,
    height: width * 0.17,
    resizeMode: 'contain',
    marginVertical: 5,
  },
  title: {
    fontWeight: '700',
    marginVertical: 5,
    fontSize: 14,
    color: AppColors.BLACK,
  },
  category: {
    marginVertical: 5,
    fontSize: 14,
    color: AppColors.GRAY,
    textTransform: 'capitalize',
  },
});

export default CartCard;
