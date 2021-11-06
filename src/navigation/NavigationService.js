import * as React from 'react';

export const navigationRef = React.createRef();
export const isReadyRef = React.createRef();
import {StackActions} from '@react-navigation/routers';
function navigate(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
}

function goBack() {
  navigationRef.current?.goBack();
}

function replace(name, params) {
  navigationRef.current &&
    navigationRef.current.dispatch(StackActions.replace(name, params));
}

export default {
  navigate,
  goBack,
  replace,
};
