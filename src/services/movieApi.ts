import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Genres } from '../components/Filter';
import { Movie } from '../features/moviesSlice';
import { MovieDetails } from '../components/DetailsMovieCard';

interface GenresData {
  genres: Genres[];
}

interface MoviesData {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BASE_URL}` }),
  tagTypes: ['FavoriteMovies'],
  endpoints: (builder) => ({
    getPopularMovies: builder.query<MoviesData, { page: number; genre_id: number | undefined }>({
      query: ({ page = 1, genre_id }) =>
        genre_id
          ? `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genre_id}&language=en-US&page=${page}`
          : `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
    }),
    getMovies: builder.mutation<MoviesData, { query: string; page: number }>({
      query: ({ query, page = 1 }) => {
        return {
          url: `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&include_adult=false&language=en-US&page=${page}`,
          method: 'get'
        };
      }
    }),
    getGenres: builder.query<GenresData, void>({
      query: () => `/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en`
    }),
    getMovieDetails: builder.query<MovieDetails, number>({
      query: (movie_id) => `/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}`
    }),
    addFavoriteMovie: builder.mutation<any, number>({
      query: (id) => {
        return {
          url: `/account/${process.env.REACT_APP_ACCOUNT_ID}/favorite?api_key=${process.env.REACT_APP_API_KEY}&session_id=${process.env.REACT_APP_SESSION_ID}`,
          method: 'POST',
          body: { media_type: 'movie', media_id: id, favorite: true }
        };
      },
      invalidatesTags: ['FavoriteMovies']
    }),
    getFavoritesMovies: builder.query<MoviesData, void>({
      query: () =>
        `/account/${process.env.REACT_APP_ACCOUNT_ID}/favorite/movies?api_key=${process.env.REACT_APP_API_KEY}&session_id=${process.env.REACT_APP_SESSION_ID}&language=en-US`,
      providesTags: ['FavoriteMovies']
    }),
    deleteFavoriteMovie: builder.mutation<any, number>({
      query: (id) => {
        return {
          url: `/account/${process.env.REACT_APP_ACCOUNT_ID}/favorite?api_key=${process.env.REACT_APP_API_KEY}&session_id=${process.env.REACT_APP_SESSION_ID}`,
          method: 'POST',
          body: { media_type: 'movie', media_id: id, favorite: false }
        };
      },
      invalidatesTags: ['FavoriteMovies']
    })
  })
});

export const {
  useGetMoviesMutation,
  useGetPopularMoviesQuery,
  useGetGenresQuery,
  useGetMovieDetailsQuery,
  useAddFavoriteMovieMutation,
  useGetFavoritesMoviesQuery,
  useDeleteFavoriteMovieMutation
} = movieApi;
