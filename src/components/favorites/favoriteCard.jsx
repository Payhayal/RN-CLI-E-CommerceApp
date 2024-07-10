import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {AppColors} from '../../theme/colors';
import {width} from '../../utils/constants';
import {ArrowRight2} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAIL} from '../../utils/routes';

const FavoriteCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(PRODUCTDETAIL, {item: item})}
      style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: item?.image,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text numberOfLines={2} style={styles.title}>
          {item?.title}
        </Text>
        <Text style={styles.category}>{item?.category}</Text>
        <Text style={styles.title}>${item?.price}</Text>
      </View>
      <View>
        <ArrowRight2 size={28} color={AppColors.BLACK} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    borderStartColor: AppColors.SOFTGRAY,
    justifyContent: 'space-between',
    alignItems: 'center',
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

export default FavoriteCard;
