import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import CustomBtn from '../../components/ui/customBtn';
import {height, width} from '../../utils/constants';
import {AppColors} from '../../theme/colors';
import Counter from '../../components/ui/counter';
import {getRequest} from '../../service/verbs';
import {PRODUCTS_URL} from '../../service/urls';
import Spinner from '../../components/ui/spinner';
import {Heart, HeartAdd, Star} from 'iconsax-react-native';
import StoreContex from '../../context';
import {SIGNIN} from '../../utils/routes';

const ProductDetail = ({route}) => {
  const {item} = route?.params;
  const [product, setProduct] = useState(null);
  const [pending, setPending] = useState(false);
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

  const getProductDetail = () => {
    setPending(true);
    getRequest(PRODUCTS_URL + `/${item?.id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setPending(false);
      });
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <SafeAreaView style={styles.topContainer}>
      <View style={screenStyle.container}>
        {pending ? (
          <Spinner />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Image
                source={{
                  uri: product?.image,
                }}
                style={styles.image}
              />
              <View style={styles.infoContainer}>
                <View style={styles.info}>
                  <Text numberOfLines={2} style={styles.title}>
                    {product?.title}
                  </Text>
                  <Text style={styles.category}>
                    {product?.category.toUpperCase()}
                  </Text>
                  <Text style={styles.price}>${product?.price}</Text>
                  <View style={styles.ratingContainer}>
                    <Star color={AppColors.PRIMARY} variant="Bold" size={20} />
                    <Text style={styles.rating}>
                      {product?.rating?.rate} / {product?.rating?.count}
                    </Text>
                  </View>
                </View>
                <View style={styles.icon}>
                  <TouchableOpacity
                    onPress={() => {
                      checkIsSignin();
                    }}
                    style={styles.iconWrap}>
                    {item.favorites ? (
                      <Heart
                        size={20}
                        color={AppColors.PRIMARY}
                        variant="Bold"
                      />
                    ) : (
                      <HeartAdd
                        size={20}
                        color={AppColors.PRIMARY}
                        variant="Outline"
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={styles.description}>{product?.description}</Text>
              </View>
            </View>
          </ScrollView>
        )}
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.count}>
          <Counter onChange={value => console.log(value)} />
        </View>
        <View style={styles.btn}>
          <CustomBtn onPress={() => addCart(item)} title="Add Cart" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
  },
  infoContainer: {
    flexDirection: 'row',
  },
  info: {
    flex: 3,
    marginVertical: 20,
  },
  title: {
    fontWeight: '700',
    fontSize: 26,
  },
  icon: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 5,
  },
  iconWrap: {
    backgroundColor: AppColors.SOFTGRAY,
    borderRadius: 100,
    padding: 5,
  },
  category: {
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 5,
    color: AppColors.GRAY,
  },
  price: {
    fontWeight: '700',
    fontSize: 20,
    marginVertical: 5,
    color: AppColors.BLACK,
  },
  description: {
    color: AppColors.BLACK,
    fontSize: 16,
  },
  ratingContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontWeight: '700',
    fontSize: 18,
    marginHorizontal: 5,
    color: AppColors.BLACK,
  },
  bottomContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    height: height * 0.1,
    backgroundColor: AppColors.WHITE,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: AppColors.SOFTGRAY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: width,
    height: width * 0.55,
    resizeMode: 'contain',
    marginVertical: 5,
  },
  btn: {
    flex: 2,
    justifyContent: 'center',
  },
});

export default ProductDetail;
