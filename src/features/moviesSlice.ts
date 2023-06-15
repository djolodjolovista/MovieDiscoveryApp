import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type Movie = {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  genre_ids: number[];
};

interface MovieState {
  moviesCollection: Movie[];
  genres: number | null;
  currentPage: number;
}

const initialState: MovieState = {
  moviesCollection: [],
  genres: null,
  currentPage: 1
};

export const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovieToCollection: (state, action: PayloadAction<Movie>) => {
      state.moviesCollection.push(action.payload);
    },
    addFilter: (state, action: PayloadAction<number>) => {
      state.genres = action.payload;
      state.currentPage = 1;
    },
    changeCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    }
  }
});

export const { addMovieToCollection, addFilter, changeCurrentPage } = moviesSlice.actions;
export default moviesSlice.reducer;
