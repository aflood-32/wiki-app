import { call, takeLatest, put } from "redux-saga/effects";
import { searchRequest } from "../../common/api";
import { IArticle } from "../../common/interfaces";

// ACTION TYPES
const SEARCH_ARTICLES_REQUEST = "SEARCH_ARTICLES_REQUEST";
const SEARCH_ARTICLES_SUCCESS = "SEARCH_ARTICLES_SUCCESS";
const SEARCH_ARTICLES_FAILURE = "SEARCH_ARTICLES_FAILURE";

// INTERFACES
interface ISearchArticlesRequest {
  type: typeof SEARCH_ARTICLES_REQUEST;
  payload: string;
}
interface ISearchArticlesSuccess {
  type: typeof SEARCH_ARTICLES_SUCCESS;
  payload: IArticle[];
}
interface ISearchArticlesError {
  type: typeof SEARCH_ARTICLES_FAILURE;
  payload: string | null;
}
export interface IInitialState {
  term: string;
  loading: boolean;
  articles: IArticle[];
  error?: string | null;
}

type TActions =
  | ReturnType<typeof searchArticlesRequest>
  | ReturnType<typeof searchArticlesSuccess>
  | ReturnType<typeof searchArticlesFailure>;

// ACTIONS
export const searchArticlesRequest = (term: string): ISearchArticlesRequest =>
  ({
    type: SEARCH_ARTICLES_REQUEST,
    payload: term,
  } as const);
const searchArticlesSuccess = (data: IArticle[]): ISearchArticlesSuccess =>
  ({
    type: SEARCH_ARTICLES_SUCCESS,
    payload: data,
  } as const);

const searchArticlesFailure = (error: string): ISearchArticlesError =>
  ({
    type: SEARCH_ARTICLES_FAILURE,
    payload: error,
  } as const);

// REDUCER
const INITIAL_STATE: IInitialState = {
  term: "",
  loading: false,
  articles: [],
  error: null,
};

export const MainPageReducer = (
  state = INITIAL_STATE,
  action: TActions
): IInitialState => {
  switch (action.type) {
    case SEARCH_ARTICLES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload,
        error: null,
      };
    case SEARCH_ARTICLES_FAILURE:
      return {
        ...state,
        loading: false,
        articles: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// SAGA
function* fetchArticles(action: ISearchArticlesRequest) {
  try {
    const data = yield call(searchRequest, action.payload);
    yield put(searchArticlesSuccess(data));
  } catch (e) {
    yield put(searchArticlesFailure("Something went wrong"));
  }
}

export function* watchFetchArticles(): Generator {
  yield takeLatest(SEARCH_ARTICLES_REQUEST, fetchArticles);
}
