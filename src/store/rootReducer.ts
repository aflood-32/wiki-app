import { combineReducers } from "redux";
import { IInitialState, MainPageReducer } from "./MainPage";
import { ArticlePageReducer } from "./ArticlePage";

export interface IRootState {
  mainPage: IInitialState;
}

export default combineReducers({
  mainPage: MainPageReducer,
  articlePage: ArticlePageReducer,
});
