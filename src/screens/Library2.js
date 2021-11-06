import React from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import theme from '../theme';
import reacttotron from '../redux/Reactotron';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Library2 extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <StatusBar backgroundColor={'white'} />
        <View
          style={{
            backgroundColor: 'white',
            height: '100%',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/MainLogo.png')}
            resizeMode="contain"
            style={{
              width: 175 * theme.consts.BW,
              height: 175 * theme.consts.BW,
            }}
          />
          <TouchableOpacity>
            <Image
              source={require('../../assets/Button1.png')}
              resizeMode="contain"
              style={{
                width: 275 * theme.consts.BW,
                height: 275 * theme.consts.BW,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Button2.png')}
              resizeMode="contain"
              style={{
                width: 275 * theme.consts.BW,
                height: 275 * theme.consts.BW,
              }}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Library2;
