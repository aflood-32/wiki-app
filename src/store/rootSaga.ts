import { all } from "redux-saga/effects";
import { watchFetchArticles } from "./MainPage";
import { watchGetArticle } from "./ArticlePage";

export default function* rootSaga() {
  yield all([watchFetchArticles(), watchGetArticle()]);
}
