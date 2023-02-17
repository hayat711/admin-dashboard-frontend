import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000',
    }),
    reducerPath: 'adminApi',
    tagTypes: ['User', 'Products'],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `/users/${id}`,
            providesTags: ['User'],
        }),
        getProducts: build.query({
            query: () => '/products',
            providesTags: ['Products'],
        }),
    }),
});

export const { useGetUserQuery, useGetProductsQuery } = api;