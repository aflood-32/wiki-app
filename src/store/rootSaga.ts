import { all } from 'redux-saga/effects';
import { watchFetchArticles } from './MainPage';

export default function* rootSaga() {
  yield all([
    watchFetchArticles(),
  ]);
}
