import { useSelector } from "react-redux"
import { selectAllcars } from "./carsApiSlice"
import NewCarForm from "./NewCarForm"

const NewCar = () => {
   const users = useSelector(selectAllcars)

   const content = users ? <NewCarForm /> : <p>Loading...</p>

   return content

}
export default NewCar
