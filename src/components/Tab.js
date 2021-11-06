import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import theme from '../theme';

class Tabs extends Component {
  state = {currentTab: 1, value: 2000};

  render() {
    return (
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 20, color: 'black'}}>Home</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 20, color: 'black'}}>Home</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Tabs;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    flex: 1,
    borderColor: 'red',
  },
});
