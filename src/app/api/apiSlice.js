import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


// could use axios instead if we wanted toq
 export const apiSlice = createApi({
        baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),  
        //tag types are cached data, so things we can change the state of basically to run or stop certain processes
      tagTypes: ['User', 'Car', 'Reservation'],
        endpoints: (builder) => ({ })
    });

