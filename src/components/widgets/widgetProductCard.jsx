import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import {width} from '../../utils/constants';
import {AppColors} from '../../theme/colors';
import {Heart, HeartAdd} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAIL, SIGNIN} from '../../utils/routes';
import StoreContex from '../../context';

const WidgetProductCard = ({item}) => {
  const navigation = useNavigation();
  const {addCart, addToFavorites, isSignIn} = useContext(StoreContex);
  const checkIsSignin = () => {
    if (isSignIn) {
      addToFavorites(item);
    } else {
      Alert.alert('Sign in', 'Please sign in to see your favorite products!', [
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
    <Pressable
      onPress={() => navigation.navigate(PRODUCTDETAIL, {item: item})}
      style={styles.container}>
      <View style={styles.midContainer}>
        <Image
          source={{
            uri: item?.image,
          }}
          style={styles.image}
        />
        <Text numberOfLines={3} style={styles.title}>
          {item?.title}
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.category}>{item?.category}</Text>
          <Text style={styles.title}>${item?.price}</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => {
              checkIsSignin();
            }}>
            {item.favorites ? (
              <Heart size={20} color={AppColors.PRIMARY} variant="Bold" />
            ) : (
              <HeartAdd size={20} color={AppColors.PRIMARY} variant="Outline" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.4,
    margin: 5,
  },
  midContainer: {
    flex: 1,
  },
  bottomContainer: {
    flex: 2,
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.4,
    height: width * 0.3,
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
  },
});

export default WidgetProductCard;
