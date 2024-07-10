import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CART,
  CHECKOUT,
  PRODUCTDETAIL,
  PRODUCTLIST,
  SIGNIN,
  TAB,
} from '../utils/routes';
import Cart from '../screen/cart';
import TabNavigator from './tabNavigator';
import {AppColors} from '../theme/colors';
import ProductList from '../screen/product/productList';
import ProductDetail from '../screen/product/productDetail';
import HeaderTabRight from './headerTabRight';
import Checkout from '../screen/checkout';
import SignIn from '../screen/signin';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerBackTitle: 'Back',
        headerBackTitleVisible: false,
        headerTintColor: AppColors.BLACK,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TAB}
        component={TabNavigator}
      />
      <Stack.Screen name={CART} component={Cart} />
      <Stack.Screen
        options={({route, navigation}) => ({
          headerRight: () => <HeaderTabRight />,
          title: route?.params?.title,
        })}
        name={PRODUCTLIST}
        component={ProductList}
      />
      <Stack.Screen
        options={({route, navigation}) => ({
          headerRight: () => <HeaderTabRight />,
        })}
        name={PRODUCTDETAIL}
        component={ProductDetail}
      />
      <Stack.Screen name={CHECKOUT} component={Checkout} />
      <Stack.Screen name={SIGNIN} component={SignIn} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
