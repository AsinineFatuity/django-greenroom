import {
    createListenerMiddleware,
    isAsyncThunkAction,
    type ListenerEffectAPI,
  } from "@reduxjs/toolkit";
  import { setFeedbackToast } from "@/redux/reducer/slices/feedbackToast";
  import { RootState, AppDispatch } from "@/redux/store";
  
  type RejectedAsyncThunkAction = any & {
    payload: { message: string };
    meta: { requestStatus: "rejected" };
  };
  
  type FulfilledAsyncThunkAction = any & {
    payload: { message: string };
    meta: { requestStatus: "fulfilled" };
  };
  
  const feedbackListener = createListenerMiddleware<RootState, AppDispatch>();
  
  feedbackListener.startListening({
    matcher: (action: any): action is RejectedAsyncThunkAction =>
      isAsyncThunkAction(action) && action.meta.requestStatus === "rejected",
  
    effect: (
      action: RejectedAsyncThunkAction,
      listenerApi: ListenerEffectAPI<RootState, AppDispatch>,
    ) => {
      listenerApi.dispatch(
        setFeedbackToast({
          type: "error",
          message: action.payload.message,
        }),
      );
    },
  });
  
  feedbackListener.startListening({
    matcher: (action: any): action is FulfilledAsyncThunkAction =>
      isAsyncThunkAction(action) && action.meta.requestStatus === "fulfilled",
    effect: (
      action: FulfilledAsyncThunkAction,
      listenerApi: ListenerEffectAPI<RootState, AppDispatch>,
    ) => {
      listenerApi.dispatch(
        setFeedbackToast({
          type: "success",
          message: action.payload.message,
        }),
      );
    },
  });
  
  export default feedbackListener;
  