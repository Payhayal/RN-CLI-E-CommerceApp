import React from 'react';
import {View, FlatList} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import widgets from '../../widgets';

const Home = () => {
  const renderItem = ({item}) => {
    return <View>{item?.isShown && item?.component}</View>;
  };
  return (
    <View style={screenStyle.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={widgets}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;
