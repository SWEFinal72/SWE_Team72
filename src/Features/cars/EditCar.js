import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useAddNewCarMutation } from "./carsApiSlice"
import { selectAllUsers } from "../users/usersApiSlice"
import { selectCarById } from "./carsApiSlice"
import EditCarForm from "./EditCarForm"



const EditCar = () => {

    const { id } = useParams();
    const car = useSelector(state => selectCarById(state, id))
    const users = useSelector(selectAllUsers)
    const content = <EditCarForm cars={car} users={users} />
    return content
}
export default EditCar