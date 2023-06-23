import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type Movie = {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  genre_ids: number[];
  synopsis: string;
  runtime: number;
  vote_average: number;
  overview: string;
};

export interface MovieState {
  genres: number | undefined;
  currentPage: number;
  modalId: number | null;
}

const initialState: MovieState = {
  genres: undefined,
  currentPage: 1,
  modalId: null
};

export const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<number | undefined>) => {
      state.genres = action.payload;
      state.currentPage = 1;
    },
    changeCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    openModal: (state, action: PayloadAction<number | null>) => {
      state.modalId = action.payload;
    }
  }
});

export const { addFilter, changeCurrentPage, openModal } = moviesSlice.actions;
export default moviesSlice.reducer;
