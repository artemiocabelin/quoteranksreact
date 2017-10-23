import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import QuoteReducer from './reducer_quote';

const rootReducer = combineReducers({
  form: formReducer,
  quotes: QuoteReducer
});

export default rootReducer;
