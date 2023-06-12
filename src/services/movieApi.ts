import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BASE_URL}` }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: (page = 1) =>
        `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
    }),
    getMovies: builder.mutation({
      query: ({ query, page = 1 }) => {
        return {
          url: `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&include_adult=false&language=en-US&page=${page}`,
          method: 'get'
        };
      }
    })
  })
});

export const { useGetMoviesMutation, useGetPopularMoviesQuery } = movieApi;
