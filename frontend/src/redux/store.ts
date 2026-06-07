import {
  configureStore,
  combineReducers,
  type ThunkDispatch,
  type UnknownAction,
} from "@reduxjs/toolkit";
import { sliceReducers } from "./reducer";
import { listenerMiddleware } from "./middleware";

export const rootReducer = combineReducers(sliceReducers);
const middleware = (getDefaultMiddleware: any): any => {
  return getDefaultMiddleware({
    serializableCheck: false,
  }).prepend(listenerMiddleware);
};

const reduxStore = configureStore({
  reducer: rootReducer,
  preloadedState: {},
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;
export default reduxStore;
