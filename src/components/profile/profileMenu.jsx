import {
  ArrowRight2,
  Book,
  Cards,
  HeartAdd,
  Location,
  NotificationBing,
  UserEdit,
} from 'iconsax-react-native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';

const ProfileMenu = () => {
  const buttons = [
    {
      title: 'Edit Profile',
      icon: <UserEdit size={26} color={AppColors.GRAY} variant="Bold" />,
      route: '',
    },
    {
      title: 'Shopping Adress',
      icon: <Location size={26} color={AppColors.GRAY} variant="Bold" />,
      route: '',
    },
    {
      title: 'Wishlist',
      icon: <HeartAdd size={26} color={AppColors.GRAY} variant="Bold" />,
      route: '',
    },
    {
      title: 'Order History',
      icon: <Book size={26} color={AppColors.GRAY} variant="Bold" />,
      route: '',
    },
    {
      title: 'Notification',
      icon: (
        <NotificationBing size={26} color={AppColors.GRAY} variant="Bold" />
      ),
      route: '',
    },
    {
      title: 'Cards',
      icon: <Cards size={26} color={AppColors.GRAY} variant="Bold" />,
      route: '',
    },
  ];
  return (
    <View style={styles.container}>
      {buttons.map((item, index) => (
        <TouchableOpacity key={index} style={styles.btnContainer}>
          <View style={styles.btn}>
            {item.icon}
            <Text style={styles.text}>{item?.title}</Text>
          </View>
          <ArrowRight2 size={28} color={AppColors.GRAY} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    marginVertical: 10,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  text: {
    fontSize: 18,
    marginLeft: 15,
    fontWeight: '500',
  },
});

export default ProfileMenu;
