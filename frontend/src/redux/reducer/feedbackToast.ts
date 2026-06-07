
import { FEEDBACK_TOAST } from "../actions/types";
import { FeedBackToastType } from "./src/helpers/interfaces";

const initialState: FeedBackToastType = {
  type: "default",
  message: "",
};

function setFeedbackToast(
  type: FeedBackToastType["type"],
  message: FeedBackToastType["message"],
) {
  return {
    type,
    message,
  };
}

export const feedbackToastReducer = (state = initialState, action: any) => {
  if (!action.errors) {
    if (action.type === FEEDBACK_TOAST.showCustomFeedbackToast) {
      return setFeedbackToast(action.payload.type, action.payload.message);
    } else {
      return state;
    }
  } else {
    if (
      Array.isArray(action.errors) &&
      action.errors.length > 0 &&
      "message" in action.errors[0]
    ) {
      return setFeedbackToast("error", action.errors[0]["message"]);
    } else if (action.errors && typeof action.errors === "string") {
      return setFeedbackToast("error", action.errors);
    }
    return setFeedbackToast("error", "Could not complete action");
  }
};

