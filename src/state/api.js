import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:7000',
    }),
    reducerPath: 'adminApi',
    tagTypes: ['User', 'Products'],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/users/${id}`,
            providesTags: ['User'],
        }),
        getProducts: build.query({
            query: () => 'client/products',
            providesTags: ['Products'],
        }),
    }),
});

export const { useGetUserQuery, useGetProductsQuery } = api;