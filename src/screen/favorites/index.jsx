import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {AppColors} from '../../theme/colors';
import {screenStyle} from '../../styles/screenStyle';
import FavoriteCard from '../../components/favorites/favoriteCard';
import StoreContex from '../../context';
import ListEmptyComponent from '../../components/ui/listEmptyComponent';

const Favorites = () => {
  const {favorites} = useContext(StoreContex);
  return (
    <View style={screenStyle.container}>
      <FlatList
        ListEmptyComponent={() => <ListEmptyComponent />}
        keyExtractor={item => item?.id}
        contentContainerStyle={{paddingBottom: 20, paddingTop: 10}}
        showsVerticalScrollIndicator={false}
        data={favorites}
        renderItem={({item}) => <FavoriteCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.WHITE,
  },
});

export default Favorites;
