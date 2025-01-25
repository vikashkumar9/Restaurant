import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const menuApi = createApi({
  reducerPath: 'menuApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }), // This will use the localhost base URL
  endpoints: (builder) => ({
    getMenu: builder.query({
      query: () => ({
        url: 'meals', // Endpoint for fetching meals
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
         // Pass the page and limit as query parameters
      }),
    }),
  }),
});

export const { useGetMenuQuery } = menuApi;
