import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppColors} from '../../theme/colors';

const Badge = ({count}) => {
  return (
    <View style={styles.count}>
      <Text>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  count: {
    backgroundColor: AppColors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    borderRadius: 30,
    position: 'absolute',
    zIndex: 99,
    right: -6,
    top: -8,
  },
});

export default Badge;
