import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from '../services/movieApi';
import moviesReducer from '../features/moviesSlice';
import { errorCatchingMiddleware } from '../services/errorCatchingMiddleware';

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    movies: moviesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([movieApi.middleware, errorCatchingMiddleware])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
