import React, {Component} from 'react';
import {ActivityIndicator, View} from 'react-native';

import PagerView from 'react-native-pager-view';
import GestureFlipView from 'react-native-gesture-flip-card';
class Page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const renderFront = () => {
      return (
        <View style={styles.frontStyle}>
          <Text style={{fontSize: 25, color: '#fff'}}>{'Front'}</Text>
        </View>
      );
    };

    const renderBack = () => {
      return (
        <View style={styles.backStyle}>
          <Text style={{fontSize: 25, color: '#fff'}}>{'Back'}</Text>
        </View>
      );
    };
    return (
      <View style={styles.container}>
        <GestureFlipView width={300} height={500}>
          {renderBack()}
          {renderFront()}
        </GestureFlipView>
      </View>
    );
  }
}

export default Page;
