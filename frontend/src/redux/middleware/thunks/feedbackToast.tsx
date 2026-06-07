import { createAsyncThunk } from "@reduxjs/toolkit";
import { FEEDBACK_TOAST } from "@/redux/actions/types";
import { FeedBackToast } from "@/types/feedbackToast";

export const showCustomFeedbackToastThunk = createAsyncThunk(
  FEEDBACK_TOAST.showCustomFeedbackToast,
  async (payload: FeedBackToast, { dispatch }) => {
    return {
        message: payload.message,
        type: payload.type,
    }
  },
);