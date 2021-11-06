import React from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import theme from '../theme';
import reacttotron from '../redux/Reactotron';
import {withNavigation} from 'react-navigation';
import Tab from '../components/Tab';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Library1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <SafeAreaView></SafeAreaView>;
  }
}
export default withNavigation(Library1);

