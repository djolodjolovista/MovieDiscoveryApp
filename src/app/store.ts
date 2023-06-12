import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from '../services/movieApi';
//import rootReducer from '../features';
import moviesReducer from '../features/moviesSlice';

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    movies: moviesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
