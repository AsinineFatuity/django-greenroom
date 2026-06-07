
import { MiddlewareActionType } from "./interfaces";
export const createMiddlewareAction = (
  type: string,
  payload: object = {},
  appendData: boolean = false,
): MiddlewareActionType => {
  return {
    type,
    payload: {
      ...payload,
      isComplete: false,
      appendData: appendData,
      feedbackToast: {type: "default", message: ""},
    },
  };
};

export const APP_URLS = {
  home: "/",
};
