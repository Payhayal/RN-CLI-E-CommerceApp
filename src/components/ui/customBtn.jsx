import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';

const CustomBtn = props => {
  const {title} = props;
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    borderRadius: 10,
    margin: 5,
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: AppColors.WHITE,
  },
});

export default CustomBtn;
