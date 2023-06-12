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
}

const initialState: MovieState = {
  moviesCollection: []
};

export const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovieToCollection: (state, action: PayloadAction<Movie>) => {
      state.moviesCollection.push(action.payload);
    }
  }
});

export const { addMovieToCollection } = moviesSlice.actions;
export default moviesSlice.reducer;
