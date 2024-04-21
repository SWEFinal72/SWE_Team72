
import {
  createSelector,
  createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const carsAdapter = createEntityAdapter({})

const initialState = carsAdapter.getInitialState()

export const carsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
      getcars: builder.query({
        //might need to change the user link
          query: () => '/cars',
          validateStatus: (response, result) => {
              return response.status === 200 && !result.isError
          },
          
          transformResponse: responseData => {
              const loadedcars = responseData.map(cars => {
                //this a mongodb connection so we need to change the id to user._id  
                  cars.id = cars._id

                  return cars
              });
              return carsAdapter.setAll(initialState, loadedcars)
          },
          providesTags: (result, error, arg) => {
              if (result?.ids) {
                  return [
                      { type: 'Car', id: 'LIST' },
                      ...result.ids.map(id => ({ type: 'Car', id }))
                  ]
              } else return [{ type: 'Car', id: 'LIST' }]
          }
      }),
      addNewCar: builder.mutation({
        query: initialCars => ({
            url: '/cars',
            method: 'POST',
            body: {
                ...initialCars,
            }
        }),
        invalidatesTags: [
            { type: 'Cars', id: "LIST" }
        ]
    }),
    updateCars: builder.mutation({
        query: initialCars => ({
            url: '/cars',
            method: 'PATCH',
            body: {
                ...initialCars,
            }
        }),
        invalidatesTags: (result, error, arg) => [
            { type: 'Cars', id: arg.id }
        ]
    }),
    deleteCars: builder.mutation({
        query: ({ id }) => ({
            url: `/cars`,
            method: 'DELETE',
            body: { id }
        }),
        invalidatesTags: (result, error, arg) => [
            { type: 'Cars', id: arg.id }
        ]
    }),
  }),
})

export const {
  useGetcarsQuery,
  useAddNewCarMutation,
  useUpdateCarMutation,
  useDeleteCarMutation,
} = carsApiSlice

// returns the query result object
export const selectcarsResult = carsApiSlice.endpoints.getcars.select()

// creates memoized selector
const selectcarsData = createSelector(
  selectcarsResult,
  carsResult => carsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllcars,
  selectById: selectCarById,
  selectIds: selectUserIds
  // Pass in a selector that returns the cars slice of state
} = carsAdapter.getSelectors(state => selectcarsData(state) ?? initialState)



