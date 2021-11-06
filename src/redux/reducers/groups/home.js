import actions from '../../actions/index'
import {combineReducers} from 'redux'
import reactotron from 'reactotron-react-native';

const {
  FETCH_BOOK,
  COMPLETE_FETCH_BOOK,
  SET_LANGUAGE,
  SET_PAGE,
  COMPLETE_SET_PAGE,
} = actions;

const initState = false;

//for books
const isFethingBook = (state = initState, action) => {
  switch (action.type) {
    case FETCH_BOOK: {
      return true;
    }
    case COMPLETE_FETCH_BOOK: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const booksArabic = (state = [], action) => {
  switch (action.type) {
    case COMPLETE_FETCH_BOOK:
      return action.data
        .filter(item => item.language == 'AR')
        .sort((a, b) => a.book_year <= b.book_year);
    default:
      return state;
  }
};
const booksEnglish = (state = [], action) => {
  switch (action.type) {
    case COMPLETE_FETCH_BOOK:
      return action.data
        .filter(item => item.language == 'EN')
        .sort((a, b) => a.book_year <= b.book_year);
    default:
      return state;
  }
};
const newarrival = (state = [], action) => {
  switch (action.type) {
    case COMPLETE_FETCH_BOOK:
      return action.data
        .filter(item => item.language == 'EN')
        .sort((a, b) => a.book_year <= b.book_year)
        .filter(item => item.rack_id == 6);

    default:
      return state;
  }
};
const language = (state = 'english', action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.lang;

    default:
      return state;
  }
};
const Page = (state = 1, action) => {
  switch (action.type) {
    case SET_PAGE:
      return action.page;
    default:
      return state;
  }
};
const PageId = (state = 1, action) => {
  switch (action.type) {
    case COMPLETE_SET_PAGE:
      return action.id;
    default:
      return state;
  }
};
export default combineReducers({
  isFethingBook,
  booksEnglish,
  booksArabic,
  language,
  Page,
  PageId,
  newarrival,
});
