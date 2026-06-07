
import { LOADING_INDICATOR } from "./types";

export const showLoadingIndicator = (showIndicator: boolean) => {
  return {
    type: LOADING_INDICATOR.showLoadingIndicator,
    payload: showIndicator,
  };
};
