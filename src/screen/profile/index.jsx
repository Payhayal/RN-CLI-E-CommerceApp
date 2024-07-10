import React, {useContext} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import StoreContex from '../../context';
import UserInfo from '../../components/profile/userInfo';
import ProfileMenu from '../../components/profile/profileMenu';
import {screenStyle} from '../../styles/screenStyle';
import {Button} from '@ui-kitten/components';
import {SIGNIN} from '../../utils/routes';
import {AppColors} from '../../theme/colors';

const Profile = ({navigation}) => {
  const {isSignIn} = useContext(StoreContex);

  return (
    <View style={screenStyle.container}>
      {isSignIn ? (
        <ScrollView>
          <UserInfo />
          <ProfileMenu />
        </ScrollView>
      ) : (
        <View style={styles.bottomContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Please sign in to view the products !
            </Text>
          </View>
          <Button
            size="large"
            onPress={() => navigation.navigate(SIGNIN)}
            style={styles.Btn}
            status="success">
            Sign in
          </Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'italic',
    color: AppColors.BLACK,
  },
  Btn: {
    marginVertical: 10,
  },
});

export default Profile;
