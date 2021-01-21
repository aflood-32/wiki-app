import { all } from "redux-saga/effects";
import { watchFetchArticles } from "./MainPage";
import { watchGetArticle } from "./ArticlePage";

export default function* rootSaga(): Generator {
  yield all([watchFetchArticles(), watchGetArticle()]);
}
