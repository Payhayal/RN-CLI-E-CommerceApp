import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {height} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../../utils/routes';
import {ArrowRight2} from 'iconsax-react-native';

const CategoryCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(PRODUCTLIST, {category: item, title: item})
      }
      style={styles.container}>
      <Text style={styles.text}>{item}</Text>
      <ArrowRight2 size={30} color={AppColors.BLACK} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    minHeight: height / 8,
    marginVertical: 5,
    backgroundColor: AppColors.SOFTGRAY,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});

export default CategoryCard;
