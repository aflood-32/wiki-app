// // ACTION TYPES
// // const SEARCH_ARTICLES_REQUEST = "SEARCH_ARTICLES_REQUEST";
// // const SEARCH_ARTICLES_SUCCESS = "SEARCH_ARTICLES_SUCCESS";
// // const SEARCH_ARTICLES_FAILURE = "SEARCH_ARTICLES_FAILURE";
//
// // INTERFACES
//
// interface ISearchArticlesError {
//   type: typeof SEARCH_ARTICLES_FAILURE;
//   payload: any;
// }
export interface IInitialState {
  menu: boolean;
  history: any;
}
//
// // ACTIONS
// export const searchArticlesRequest = (
//   term: string
// ): ISearchArticlesRequest => ({
//   type: SEARCH_ARTICLES_REQUEST,
//   payload: term,
// });
//
// // REDUCER
const INITIAL_STATE: IInitialState = {
  menu: false,
  history: [],
};
//
export const LayoutReducer = (
  state = INITIAL_STATE,
  action: any
): IInitialState => {
  switch (action.type) {
    default:
      return state;
  }
};
//
