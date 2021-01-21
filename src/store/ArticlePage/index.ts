import { call, takeLatest, put } from "redux-saga/effects";
import { fetchArticleRequest } from "../../common/api";
import { IDocument } from "../../common/wtf_interfaces";

// ACTION TYPES
const GET_ARTICLE_REQUEST = "GET_ARTICLE_REQUEST";
const GET_ARTICLE_SUCCESS = "GET_ARTICLE_SUCCESS";
const GET_ARTICLE_FAILURE = "GET_ARTICLE_FAILURE";

const HANDLE_GALLERY_MODE = "TOGGLE_GALERY_MODE";

const GET_ARTICLE_RESET = "GET_ARTICLE_RESET";

// INTERFACES
interface IGetArticleRequest {
  type: typeof GET_ARTICLE_REQUEST;
  payload: string;
}
interface IGetArticleSuccess {
  type: typeof GET_ARTICLE_SUCCESS;
  payload: IDocument;
}
interface IGetArticleError {
  type: typeof GET_ARTICLE_FAILURE;
  payload: string;
}
interface IHandleGalleryMode {
  type: typeof HANDLE_GALLERY_MODE;
  payload: number | null;
}
export interface IGetArticleReset {
  type: typeof GET_ARTICLE_RESET;
}

type TActions =
  | ReturnType<typeof getArticleRequest>
  | ReturnType<typeof getArticleSuccess>
  | ReturnType<typeof getArticleFailure>
  | ReturnType<typeof handleGalleryMode>
  | ReturnType<typeof getArticleReset>;

interface IInitialState {
  loading: boolean;
  // IDOCUMENT
  article: any;
  galleryIdx: number | null;
  error: string | null;
}

// ACTIONS
export const getArticleRequest = (term: string): IGetArticleRequest =>
  ({
    type: GET_ARTICLE_REQUEST,
    payload: term,
  } as const);
const getArticleSuccess = (data: IDocument): IGetArticleSuccess =>
  ({
    type: GET_ARTICLE_SUCCESS,
    payload: data,
  } as const);

const getArticleFailure = (error: string): IGetArticleError =>
  ({
    type: GET_ARTICLE_FAILURE,
    payload: error,
  } as const);

export const handleGalleryMode = (idx: number | null): IHandleGalleryMode =>
  ({
    type: HANDLE_GALLERY_MODE,
    payload: idx,
  } as const);

export const getArticleReset = (): IGetArticleReset =>
  ({
    type: GET_ARTICLE_RESET,
  } as const);

// REDUCER
const INITIAL_STATE: IInitialState = {
  loading: false,
  article: [],
  galleryIdx: null,
  error: null,
};

export const ArticlePageReducer = (
  state = INITIAL_STATE,
  action: TActions
): IInitialState => {
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
        error: action.payload,
      };
    case HANDLE_GALLERY_MODE:
      return {
        ...state,
        galleryIdx: action.payload,
      };
    case GET_ARTICLE_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

// SAGA
function* getArticle(action: IGetArticleRequest) {
  try {
    const data = yield call(fetchArticleRequest, action.payload);
    yield put(getArticleSuccess(data));
  } catch (e) {
    yield put(getArticleFailure(e.message));
  }
}

export function* watchGetArticle(): Generator {
  yield takeLatest(GET_ARTICLE_REQUEST, getArticle);
}
