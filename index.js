import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './src/navigation/AppNavigation';
import {name as appName} from './app.json';
SplashScreen.hide();
const Ekiaai = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Ekiaai);
