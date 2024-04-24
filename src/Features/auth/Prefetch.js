import {store} from '../../app/store';
import { usersApiSlice } from '../users/usersApiSlice';
import { carsApiSlice } from '../cars/carsApiSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {
    useEffect(() => {
        console.log('subscribing')
        const cars = store.dispatch(carsApiSlice.endpoints.getcars.initiate())
        const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())

        return () => {
            console.log('unsubscribing')
            cars.unsubscribe()
            users.unsubscribe()
        }
    }, [])

    return <Outlet />
} 
export default Prefetch