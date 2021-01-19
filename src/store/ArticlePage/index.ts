import { call, takeLatest, put } from 'redux-saga/effects';
import { searchRequest } from '../../common/api';
import { IArticle } from '../../common/interfaces';

// ACTION TYPES
const SEARCH_ARTICLE_REQUEST = 'SEARCH_ARTICLE_REQUEST';
const SEARCH_ARTICLE_SUCCESS = 'SEARCH_ARTICLE_SUCCESS';
const SEARCH_ARTICLE_FAILURE = 'SEARCH_ARTICLE_FAILURE';

// INTERFACES
interface ISearchArticlesRequest {
  type: typeof SEARCH_ARTICLE_REQUEST
  payload: string
}
interface ISearchArticlesSuccess {
  type: typeof SEARCH_ARTICLE_SUCCESS
  payload: any
}
interface ISearchArticlesError {
  type: typeof SEARCH_ARTICLE_FAILURE
  payload: any
}
interface IInitialState{
  term: string
  loading: boolean
  articles: IArticle[]
  error?: any
}

// ACTIONS
export const searchArticlesRequest = (term: string): ISearchArticlesRequest => ({
  type: SEARCH_ARTICLE_REQUEST,
  payload: term,
});
const searchArticlesSuccess = (data: any): ISearchArticlesSuccess => ({
  type: SEARCH_ARTICLE_SUCCESS,
  payload: data,
});

const searchArticlesFailure = (error: any): ISearchArticlesError => ({
  type: SEARCH_ARTICLE_FAILURE,
  payload: error,
});


// REDUCER
const INITIAL_STATE: IInitialState = {
  term: '',
  loading: false,
  articles: [],
  error: null,
};

export const ArticlePageReducer = (state = INITIAL_STATE, action: any) :any => {
  switch (action.type) {
    default: return state;
  }
};

// SAGA
function* fetchArticle(action: any) {
  try {
    const data = yield call(searchRequest, action.payload);
    yield put(searchArticlesSuccess(data));
  } catch (e) {
    yield put(searchArticlesFailure(e));
  }
}

export function* watchFetchArticles() {
  yield takeLatest(SEARCH_ARTICLE_REQUEST, fetchArticle);
}
