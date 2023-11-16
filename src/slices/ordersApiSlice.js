import { apiSlice } from "./apiSlice"   
import { ORDERS_URL } from "../constants"

export const ordersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getOrders: builder.mutation({
            query: (order) => ({
                url: ORDERS_URL,
                method: 'POST',
                body: {...order}
            })
        })
    })
})




export const { useCreateOrderMutation } = ordersApiSlice