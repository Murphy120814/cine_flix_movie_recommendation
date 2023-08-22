import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    // ? get movies by [type]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page }) => {
        // //* get movies by search
        // if (searchQuery) {
        //   return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        // }
        //* get movies by categories
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }
        //* get movies by genreIds
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }
        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
    // ? now getting the genres from the API
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),
  }),
});
console.log(tmdbApi);

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;