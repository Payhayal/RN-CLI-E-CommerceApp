import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../../utils/routes';

const WidgetTitle = ({title, category}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(PRODUCTLIST, {category: category, title: title})
        }>
        <Text style={styles.btn}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginBottom: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  btn: {
    color: AppColors.GRAY,
    fontSize: 14,
    marginRight: 15,
  },
});

export default WidgetTitle;
