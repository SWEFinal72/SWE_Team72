
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCarById } from "./carsApiSlice"

import { selectAllUsers } from "../users/usersApiSlice"

const EditCarForm = () => {
    const { id } = useParams()
    const car = useSelector(state => selectCarById(state, id))
    const users = useSelector(selectAllUsers)

    const content = car ? <EditCarForm car={car} users={users} /> : <p>Loading...</p>

    return content
}

export default EditCarForm