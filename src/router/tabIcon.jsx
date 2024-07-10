import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppColors} from '../theme/colors';
import {
  Category,
  Home,
  NotificationFavorite,
  Profile,
} from 'iconsax-react-native';
import {CATEGORIES, FAVORITES, HOME, PROFILE} from '../utils/routes';

const TabIcon = ({name, size, color}) => {
  if (name === HOME) {
    return <Home size={size} color={color} variant="Bold" />;
  }
  if (name === CATEGORIES) {
    return <Category size={size} color={color} variant="Bold" />;
  }
  if (name === FAVORITES) {
    return <NotificationFavorite size={size} color={color} variant="Bold" />;
  }
  if (name === PROFILE) {
    return <Profile size={size} color={color} variant="Bold" />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
  },
});

export default TabIcon;
