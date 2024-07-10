import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {AddCircle, MinusCirlce} from 'iconsax-react-native';

const Counter = ({onChange, size = 24}) => {
  const [count, setCount] = useState(0);

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
      onChange(count - 1);
    }
  };
  const increase = () => {
    if (count < 5) {
      setCount(count + 1);
      onChange(count + 1);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={decrease}>
        <MinusCirlce size={size} variant="Outline" color={AppColors.BLACK} />
      </TouchableOpacity>
      <Text style={styles.text}>{count}</Text>
      <TouchableOpacity style={styles.btn} onPress={increase}>
        <AddCircle size={size} variant="Bold" color={AppColors.BLACK} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: AppColors.SOFTGRAY,
    padding: 7,
    borderRadius: 10,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Counter;
