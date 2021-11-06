import React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {BackHandler} from 'react-native';
import actions from './src/redux/actions';
import AppNavigation from './src/navigation/AppNavigation';
const {startUp} = actions;
import {NavigationActions} from 'react-navigation';
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}

export default App;
