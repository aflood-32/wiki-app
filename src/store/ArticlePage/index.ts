import { call, takeLatest, put } from "redux-saga/effects";
import { fetchArticleRequest } from "../../common/api";

// ACTION TYPES
const GET_ARTICLE_REQUEST = "GET_ARTICLE_REQUEST";
const GET_ARTICLE_SUCCESS = "GET_ARTICLE_SUCCESS";
const GET_ARTICLE_FAILURE = "GET_ARTICLE_FAILURE";

const GET_ARTICLE_RESET = "GET_ARTICLE_RESET";

// INTERFACES
interface IGetArticleRequest {
  type: typeof GET_ARTICLE_REQUEST;
  payload: string;
}
interface IGetArticleSuccess {
  type: typeof GET_ARTICLE_SUCCESS;
  payload: any;
}
interface IGetArticleError {
  type: typeof GET_ARTICLE_FAILURE;
  payload: any;
}
interface IGetArticleReset {
  type: typeof GET_ARTICLE_RESET;
}
interface IInitialState {
  loading: boolean;
  article: string;
  error?: any;
}

// ACTIONS
export const getArticleRequest = (term: string): IGetArticleRequest => ({
  type: GET_ARTICLE_REQUEST,
  payload: term,
});
const getArticleSuccess = (data: any): IGetArticleSuccess => ({
  type: GET_ARTICLE_SUCCESS,
  payload: data,
});

const getArticleFailure = (error: any): IGetArticleError => ({
  type: GET_ARTICLE_FAILURE,
  payload: error,
});

export const getArticleReset = (): IGetArticleReset => ({
  type: GET_ARTICLE_RESET,
});

// REDUCER
const INITIAL_STATE: IInitialState = {
  loading: false,
  article: "",
  error: null,
};

export const ArticlePageReducer = (state = INITIAL_STATE, action: any): any => {
  switch (action.type) {
    case GET_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        article: action.payload,
        error: null,
      };
    case GET_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: "error",
      };
    case GET_ARTICLE_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

// SAGA
function* getArticle(action: any) {
  try {
    const data = yield call(fetchArticleRequest, action.payload);
    yield put(getArticleSuccess(data));
  } catch (e) {
    yield put(getArticleFailure(e));
  }
}

export function* watchGetArticle() {
  yield takeLatest(GET_ARTICLE_REQUEST, getArticle);
}
