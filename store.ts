import dayPlanReducer from "@/features/dayPlan/dayPlanSlice";
import authReducer from "@/features/auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import apiReducer, { emptySplitApi } from "./services/emptySliceApi";

export const store = configureStore({
  reducer: {
    api: apiReducer,
    auth: authReducer,
    dayPlan: dayPlanReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;