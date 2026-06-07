import { loadingReducer } from "@/redux/reducer/slices/loading";
import { feedbackToastReducer } from "@/redux/reducer/slices/feedbackToast";

export const sliceReducers = {
  loader: loadingReducer,
  feedbackToast: feedbackToastReducer,
};

export default sliceReducers;
