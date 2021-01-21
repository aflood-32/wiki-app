// // ACTION TYPES
import { getLocalHistory, saveLocalHistory } from "./utils";

const LOAD_HISTORY = "LOAD_HISTORY";
const SAVE_TO_HISTORY = "SAVE_TO_HISTORY";

// // INTERFACES

interface ILoadHistory {
  type: typeof LOAD_HISTORY;
}
interface ISaveToHistory {
  type: typeof SAVE_TO_HISTORY;
  payload: string;
}
export interface IInitialState {
  history: Array<string>;
}
type TActions =
  | ReturnType<typeof loadHistory>
  | ReturnType<typeof saveToHistory>;

// ACTIONS
export const loadHistory = (): ILoadHistory => ({
  type: LOAD_HISTORY,
});
export const saveToHistory = (title: string): ISaveToHistory => ({
  type: SAVE_TO_HISTORY,
  payload: title,
});

// // REDUCER
const INITIAL_STATE: IInitialState = {
  history: [],
};

export const LayoutReducer = (
  state = INITIAL_STATE,
  action: TActions
): IInitialState => {
  switch (action.type) {
    case LOAD_HISTORY:
      return {
        history: getLocalHistory(),
      };
    case SAVE_TO_HISTORY:
      saveLocalHistory(action.payload);
      return {
        history: getLocalHistory(),
      };
    default:
      return state;
  }
};
//
