import React from 'react';
import {Text} from 'react-native';
import Home from './screens/Home';
import {withNavigation} from 'react-navigation';
import store from './src/redux/store';
import {Provider} from 'react-redux';
class Index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default Index;
