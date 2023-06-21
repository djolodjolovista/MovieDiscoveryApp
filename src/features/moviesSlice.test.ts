import { PayloadAction } from '@reduxjs/toolkit';
import moviesReducer, { MovieState, addFilter, changeCurrentPage, openModal } from './moviesSlice';

describe('moviesSlice reducer', () => {
  const initialState: MovieState = {
    genres: undefined,
    currentPage: 1,
    modalId: null
  };

  test('should handle addFilter', () => {
    const filterId = 1;
    const action: PayloadAction<number | undefined> = addFilter(filterId);
    const nextState = moviesReducer(initialState, action);

    expect(nextState.genres).toBe(filterId);
    expect(nextState.currentPage).toBe(1);
  });

  test('should handle changeCurrentPage', () => {
    const page = 2;
    const action: PayloadAction<number> = changeCurrentPage(page);
    const nextState = moviesReducer(initialState, action);

    expect(nextState.currentPage).toBe(page);
  });

  test('should handle openModal', () => {
    const modalId = 123;
    const action: PayloadAction<number | null> = openModal(modalId);
    const nextState = moviesReducer(initialState, action);

    expect(nextState.modalId).toBe(modalId);
  });
});
