
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { sliceReducers } from "./reducer";
export const rootReducer = combineReducers(sliceReducers);

const reduxStore = configureStore({
  reducer: rootReducer,
  preloadedState: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof reduxStore.dispatch;
export default reduxStore;
