import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeedBackToast } from "@/types/feedbackToast";

interface FeedbackState {
  feedbackToast: FeedBackToast;
}

const defaultState: FeedbackState = {
  feedbackToast: {
    type: "default",
    message: "",
  },
};

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState: defaultState,
  reducers: {
    setFeedbackToast: (state, action: PayloadAction<FeedBackToast>) => {
      state.feedbackToast = action.payload;
    },
    clearFeedbackToast: (state) => {
      state.feedbackToast = {
        type: "default",
        message: "",
      };
    },
  },
});

export const { setFeedbackToast, clearFeedbackToast } = feedbackSlice.actions;
export const feedbackToastReducer = feedbackSlice.reducer;
