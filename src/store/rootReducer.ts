import { combineReducers } from "redux";
import { MainPageReducer } from "./MainPage";
import { ArticlePageReducer } from "./ArticlePage";
import { LayoutReducer } from "./Layout";

export const rootReducer = combineReducers({
  layout: LayoutReducer,
  mainPage: MainPageReducer,
  articlePage: ArticlePageReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
