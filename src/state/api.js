import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:7000',
    }),
    reducerPath: 'adminApi',
    tagTypes: ['User', 'Products', 'Customers', 'Transactions'],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/users/${id}`,
            providesTags: ['User'],
        }),
        getProducts: build.query({
            query: () => 'client/products',
            providesTags: ['Products'],
        }),
        getCustomers: build.query({
            query: () => 'client/customers',
            providesTags: ['Customers'],
        }),
        getTransactions: build.query({
            query: ({ page, pageSize, sort, search }) => ({
                url: 'client/transactions',
                method: 'GET',
                params: { page, pageSize, sort, search },
            }),
            providesTags: ['Transactions'],
        }),
    }),
});

export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery, useGetTransactionsQuery } = api;
