import React, {useContext, useState} from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import {Button, Input} from '@ui-kitten/components';
import {width} from '../../utils/constants';
import {screenStyle} from '../../styles/screenStyle';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {AppColors} from '../../theme/colors';
import {postRequest} from '../../service/verbs';
import {LOGIN_URL} from '../../service/urls';
import StoreContex from '../../context';

const SignIn = ({navigation}) => {
  const [username, setUsername] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');
  const [disabledBtn, setDisabled] = useState('');
  const [isUsername, setUsernameRequre] = useState(true);
  const [isPassword, setPasswordRequre] = useState(true);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const {setIsSignIn} = useContext(StoreContex);

  const signin = () => {
    const form = {
      username: null,
      password: null,
    };
    if (username) {
      form.username = username;
      setUsernameRequre(true);
    } else {
      setUsernameRequre(false);
    }
    if (password) {
      form.password = password;
      setPasswordRequre(true);
    } else {
      setPasswordRequre(false);
    }
    if (password && username) {
      setDisabled(true);
      postRequest(LOGIN_URL, form)
        .then(res => {
          console.log(res.data);
          setIsSignIn(true);
          navigation.goBack();
        })
        .catch(error => {
          console.log(error.res);
        })
        .finally(() => {
          setDisabled(false);
        });
    }
  };

  return (
    <View style={screenStyle.container}>
      <ScrollView>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../assets/icon/shopping.png')}
            style={styles.image}
          />
        </View>
        <View>
          <Input
            size="large"
            style={styles.input}
            status={isUsername ? 'success' : 'danger'}
            value={username}
            caption={isUsername ? null : '! Enter your name'}
            label="Username"
            placeholder="username"
            onChangeText={value => setUsername(value)}
          />
          <Input
            size="large"
            status={isPassword ? 'success' : 'danger'}
            style={styles.input}
            caption={isPassword ? null : '! Minimum 6 characters required'}
            value={password}
            label="Password"
            accessoryRight={
              secureTextEntry ? (
                <EyeSlash
                  size="28"
                  color={AppColors.BLACK}
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                />
              ) : (
                <Eye
                  size="28"
                  color={AppColors.BLACK}
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                />
              )
            }
            secureTextEntry={secureTextEntry}
            placeholder="password"
            onChangeText={value => setPassword(value)}
          />
        </View>
        <View>
          <Button
            disabled={disabledBtn}
            onPress={signin}
            style={styles.btn}
            status="success">
            Sign in
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    padding: 20,
  },
  image: {
    width: width * 0.3,
    height: width * 0.2,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 5,
  },
  input: {
    marginVertical: 10,
  },
  btn: {
    marginVertical: 10,
  },
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'opensans-regular',
    color: '#8F9BB3',
  },
});

export default SignIn;
