import {put, takeLatest, call, select} from 'redux-saga/effects';
import {fetchBooks} from '../../network/General';
import actions from '../../actions';
import reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {Alert} from 'react-native';
const {completeFetchBook, FETCH_BOOK, SET_PAGE, completeSetPage} = actions;

//functions for Books
function* performFetchBook({}) {
  try {
    const result = yield call(fetchBooks);

    if (result.networkSuccess) {
      yield put(completeFetchBook({data: result.data}));
    } else yield put(completeFetchBook({data: []}));
  } catch {
    yield put(completeFetchBook({data: []}));
    return;
  }
}

export function* watchFetchBook() {
  yield takeLatest(FETCH_BOOK, performFetchBook);
}

// //functions for save Books
// function* performFetchSavedBook({}) {
//   const pagenum = yield select(state => state.home.Page);
//   const con = {pagenum};
//   const convert = JSON.stringify(con);
//   reactotron.log('profile', convert);
//   yield call(AsyncStorage.setItem, 'pagenumbers', convert);

//   const value = yield call(AsyncStorage.getItem, 'pagenumbers');
//   const convert2 = JSON.parse(value);
//   reactotron.log('value', convert2.pagenum);
//   yield put(completeSetPage({page: convert2.pagenum}));
// }

// export function* watchFetchSavedBook() {
//   yield takeLatest(SET_PAGE, performFetchSavedBook);
// }
