import {createAction} from '../creators'

export default {
  ...createAction('FETCH_BOOK'),
  ...createAction('COMPLETE_FETCH_BOOK', 'data'),
  ...createAction('START_UP'),
  ...createAction('START_UP_DONE', 'data'),
  ...createAction('SET_LANGUAGE', 'lang'),
  ...createAction('SET_PAGE', 'page'),
  ...createAction('COMPLETE_SET_PAGE', 'id'),
};
