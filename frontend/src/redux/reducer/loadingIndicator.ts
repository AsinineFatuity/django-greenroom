
import { LOADING_INDICATOR } from "../actions/types";

const determineLoadingIndicatorState = (
  currentState: number,
  payload: boolean,
) => {
  if (currentState >= 0) {
    if (payload) {
      currentState += 1;
    } else if (currentState - 1 >= 0) {
      currentState -= 1;
    }
  }
  return currentState;
};

export const loadingIndicatorReducer = (state = 0, action: any) => {
  let currentState = state;
  if (action.type === LOADING_INDICATOR.showLoadingIndicator) {
    return determineLoadingIndicatorState(currentState, action.payload);
  } else if (action?.payload?.isComplete) {
    return determineLoadingIndicatorState(currentState, false);
  }
  return currentState;
};
