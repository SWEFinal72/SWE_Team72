import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCarById } from "./carsApiSlice"
import EditCarForm from "./EditCarForm"
import { selectAllUsers } from "../users/usersApiSlice"


const NewCarForm = () => {

    const { id } = useParams()
    const car = useSelector(state => selectCarById(state, id))
    const users = useSelector(selectAllUsers)

    const content = car ? <EditCarForm car={car} users={users} /> : <p>Loading...</p>

    return content
}

export default NewCarForm




