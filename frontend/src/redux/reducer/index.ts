
import { loadingIndicatorReducer } from "./loadingIndicator";
import { feedbackToastReducer } from "./feedbackToast";

export const sliceReducers = {
  isLoading: loadingIndicatorReducer,
  feedbackToast: feedbackToastReducer,
};

export default sliceReducers;
