import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { employeeReducer } from './reducers/employeeReducer';

const rootReducer = combineReducers({
  employeeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
