
import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSave, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import { useDeleteCarMutation } from "./carsApiSlice"
import { useUpdateCarMutation } from "./carsApiSlice"
import { useSelector } from "react-redux"
import { selectCarById } from "./carsApiSlice"

import { selectAllUsers } from "../users/usersApiSlice"

const EditCarForm = ({cars,users =[]}) => {
 
    const [updateCars
        ,{
            isLoading,
            isSuccess,
            isError,
            error
        }
    ] = useUpdateCarMutation()

    const [deleteCar
        ,{
            isSuccess: isDelSuccess,
            isError: isDelError,
            error: delerror
        }
    ] = useDeleteCarMutation()

    const navigate = useNavigate()

    const[brand, setBrand] = useState(cars.brand)
    const[model, setModel] = useState(cars.model)
    const[year, setYear] = useState(cars.year)
    const[price, setPrice] = useState(cars.price)
    const[location, setLocation] = useState(cars.location)
    const[userId,setUserId]= useState(cars.user)
    const[PPM,setPPM] = useState(cars.PPM)

    useEffect(() => {
        if (isSuccess || isDelSuccess) {
            setBrand('')
            setModel('')
            setYear('')
            setPrice('')
            setLocation('')
            setPPM('')
            navigate('/user_dashboard/user_reservations')
        }
    }, [isSuccess, isDelSuccess, navigate])

    const onBrandChanged = e => setBrand(e.target.value)
    const onModelChanged = e => setModel(e.target.value)
    const onYearChanged = e => setYear(e.target.value)
    const onPriceChanged = e => setPrice(e.target.value)
    const onLocationChanged = e => setLocation(e.target.value)
    const onPPMChanged = e => setPPM(e.target.value)
    const onUserIdChanged = e => setUserId(e.target.value)


     const canSave = [brand, model, year, price, location, PPM].every(Boolean) && !isLoading

    // const onSaveCarClicked = async (e) => {
       
    //     if(canSave) {
    //         await updateCars({id: cars.id, user: userId, brand, model, year, price, location, PPM})
    //     }
    // }
   

//     const onSaveCarClicked = async (e) => {
//     if (canSave) {
//         await updateCars.mutate({ id: cars.id, user: userId, brand, model, year, price, location, PPM });
//     }
// }
const onSaveCarClicked = async () => {
    if (canSave) {
        // Assuming your API expects an object with the structure defined in your schema
        const updatedCar = {
            id: cars.id,
            user: userId,
            carInfo: {
                "car-brand": brand,
                "model": model,
                "miles": year, // Assuming 'year' is actually the mileage
                "location": location,
                "cost-mile": price, // Assuming 'price' is actually the cost per mile
                // Add other properties as needed
            }
        };
        await updateCars.mutate(updatedCar);
    }
}

    const onDeleteCarClicked = async (e) => {
        await deleteCar({id: cars.id})
    }

    const options = users.map(user => {
        return(
            <option key={user.id} value={user.id}>
                {user.username}
            </option>
        
        )
    })

    const errClass = (isError || isDelError) ? "errmsg" : "offscreen"
    const validBrandClass = !brand ? 'form__input--incomplete' : ''
    const validModelClass = !model ? 'form__input--incomplete' : ''
    const validYearClass = !year ? 'form__input--incomplete' : ''
    const validPriceClass = !price ? 'form__input--incomplete' : ''
    const validLocationClass = !location ? 'form__input--incomplete' : ''
    const validPPMClass = !PPM ? 'form__input--incomplete' : ''


    const errContent = ( error?.data?.message || delerror?.data?.message) ?? ''

    const content = (
            <> 
              <p className={errClass}>{errContent}</p>

        <form className="form" onSubmit={e=>e.preventDefault()}>
            <div className="form__title-row">
            <h2>Edit Car </h2>
            <div className="form__action-buttons">
                <button 
                className="form__save-button"
                title="Save"
                onClick={onSaveCarClicked}
                disabled={!canSave}
                >
                    <FontAwesomeIcon icon={faSave} />
                </button>
                <button
                className="form__delete-button"
                title="Delete"
                onClick={onDeleteCarClicked}
                >
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>       
                 </div>
            </div>
            <label className="form__label" htmlFor="brand">
                Brand:
            </label>
            <input
                className={`form__input ${validBrandClass}`}
                type="text"
                id="brand"
                name="brand"
                value={brand}
                onChange={onBrandChanged}
            />
            <label className="form__label" htmlFor="model">
                Model:
            </label>
            <input
                className={`form__input ${validModelClass}`}
                type="text"
                id="model"
                name="model"
                value={model}
                onChange={onModelChanged}
            />
            <label className="form__label" htmlFor="year">
                Year:
            </label>
            <input
                className={`form__input ${validYearClass}`}
                type="text"
                id="year"
                name="year"
                value={year}
                onChange={onYearChanged}
            />
            <label className="form__label" htmlFor="price">
                Price:
            </label>
            <input
                className={`form__input ${validPriceClass}`}
                type="text"
                id="price"
                name="price"
                value={price}
                onChange={onPriceChanged}
            />
            <label className="form__label" htmlFor="location">
                Location:
            </label>
            <input
                className={`form__input ${validLocationClass}`}
                type="text"
                id="location"
                name="location"
                value={location}
                onChange={onLocationChanged}
            />
            <label className="form__label" htmlFor="PPM">
                Price Per Mile:
            </label>
            <input
                className={`form__input ${validPPMClass}`}
                type="text"
                id="PPM"
                name="PPM"
                value={PPM}
                onChange={onPPMChanged}
            />
            <label className="form__label" htmlFor="user">
                User:
            </label>
            <select
                className="form__input"
                id="user"
                name="user"
                value={userId}
                onChange={onUserIdChanged}
            >
                {options}
            </select>
            




            </form>


            
            </>
      
    )
    return content

    

}

export default EditCarForm