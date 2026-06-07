
import { FEEDBACK_TOAST } from "./types";
import { FeedBackToastType } from "../../helpers/interfaces";

export const showCustomFeedbackToast = (
  message: FeedBackToastType["message"],
  type: FeedBackToastType["type"],
) => {
  return {
    type: FEEDBACK_TOAST.showCustomFeedbackToast,
    payload: { message, type },
  };
};
