import { combineReducers } from 'redux';
import { MainPageReducer } from './MainPage';


export default combineReducers({
  mainPage: MainPageReducer,
});
