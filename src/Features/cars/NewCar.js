import { useSelector } from "react-redux"
import { selectAllcars } from "./carsApiSlice"
import NewCarForm from "./NewCarForm"
import { faIgloo } from "@fortawesome/free-solid-svg-icons"

const NewCar = () => {
   const users = useSelector(selectAllcars)

   if(users.length === 0) {
       return (
           <section>
               <h2>No cars available</h2>
               <p>Looks like there are no cars available</p>
           </section>
       )
   }

   const content =  <NewCarForm  users={users}/> 

   return content

}
export default NewCar
