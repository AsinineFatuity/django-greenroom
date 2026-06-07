
import { Action } from "redux";

export interface MiddlewareActionType extends Action {
  type: string;
  payload: {
    isComplete: boolean;
    feedbackToast: FeedBackToastType;
    appendData: boolean;
    [key: string]: any;
  };
}

export interface FeedBackToastType {
  type: "info" | "success" | "warning" | "error" | "default";
  message: string;
}
