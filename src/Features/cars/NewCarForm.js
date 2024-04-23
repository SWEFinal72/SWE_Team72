import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useAddNewCarMutation } from "./carsApiSlice"
import { selectCarById } from "./carsApiSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import EditCarForm from "./EditCarForm"
import { faSave } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import { selectAllUsers } from "../users/usersApiSlice"

// their is an issue with the code below, the users are not being displayed in the dropdown

const NewCarForm = ({users=[]}) => {
    const [addNewCar,{
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewCarMutation()
   
    const navigate = useNavigate()
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const[userId,setUserId]= useState(users ? users[0].id : '')
    const [PPM,setPPM] = useState('')

    useEffect(() => {
        if (isSuccess) {
            setBrand('')
            setModel('')
            setYear('')
            setPrice('')
            setLocation('')
            setPPM('')
            navigate('/user_dashboard/user_reservations')
        }
    }, [isSuccess, navigate])

    const onBrandChanged = e => setBrand(e.target.value)
    const onModelChanged = e => setModel(e.target.value)
    const onYearChanged = e => setYear(e.target.value)
    const onPriceChanged = e => setPrice(e.target.value)
    const onLocationChanged = e => setLocation(e.target.value)
    const onPPMChanged = e => setPPM(e.target.value)
    const onUserIdChanged = e => setUserId(e.target.value)

    const canSave = [brand, model, year, price, location, PPM].every(Boolean) && !isLoading


    // const onSaveCarClicked = async (e) => {
    //     e.preventDefault()
    //     if(canSave) {
    //         try {
    //             const result = await addNewCar({user: userId, brand, model, year, price, location, PPM})
    //             console.log(result)
    //         } catch (err) {
    //             console.error("Failed to save the car: ", err)
    //         }
    //     }
    // }

    const onSaveCarClicked = async (e) => {
        e.preventDefault();
        if (canSave) {
            try {
                const carData = {
                    carInfo: [{
                        "car-brand": brand,
                        "model": model,
                        "miles": year, // Assuming 'year' is equivalent to 'miles'
                        "location": location,
                        "cost-mile": price, // Assuming 'price' is equivalent to 'cost-mile'
                        "cost-day": "", // You need to handle 'cost-day' separately
                        "pickup": "" // You need to handle 'pickup' separately
                    }],
                    rented: false // Assuming 'rented' should default to 'false' until rented
                };
                const result = await addNewCar(carData);
                console.log(result);
            } catch (err) {
                console.error("Failed to save the car: ", err);
            }
        }
    };

    const options = users ? users.map(user => {
        return(
            <option key={user.id} value={user.id}>
                {user.username}
            </option>
        
        )
    }) : [];

    const errClass = isError ? "errmsg" : "offscreen"
    const validModelClass = !model ? "form__input--incomplete" : " "
    const validYearClass = !year ? "form__input--incomplete" : " "
    const validPriceClass = !price ? "form__input--incomplete" : " "
    const validLocationClass = !location ? "form__input--incomplete" : " "
    const validPPMClass = !PPM ? "form__input--incomplete" : " "
    const validBrandClass = !brand ? "form__input--incomplete" : " "

    const content = (
        <>

            <p className = {errClass}>{error?.data?.message}</p>

            <form className=" form" onSubmit={onSaveCarClicked}>

            <div className="form__title-row">
                <h2> New Car</h2>
                <div className="form__action-buttons">
                    <button
                        className="icon-button"
                        title="Save"
                        disabled={!canSave}
                    >
                        <FontAwesomeIcon icon={faSave} />
                    </button>
                </div>
            </div>
            <label className = "form__label" htmlFor="brand">
                Brand: </label>
                <input
                    className = {`form__input ${validBrandClass}`}
                    type="text"
                    id="brand"
                    name="brand"
                    value={brand}
                    onChange={onBrandChanged}
                />
                <label className = "form__label" htmlFor="model">
                Model: </label>
                <input
                    className = {`form__input ${validModelClass}`}
                    type="text"
                    id="model"
                    name="model"
                    value={model}
                    onChange={onModelChanged}
                />
                <label className = "form__label" htmlFor="year">
                Year: </label>
                <input
                    className = {`form__input ${validYearClass}`}
                    type="text"
                    id="year"
                    name="year"
                    value={year}
                    onChange={onYearChanged}
                />
                <label className = "form__label" htmlFor="price">
                Price: </label>
                <input
                    className = {`form__input ${validPriceClass}`}
                    type="text"
                    id="price"
                    name="price"
                    value={price}
                    onChange={onPriceChanged}
                />
                <label className = "form__label" htmlFor="location">
                Location: </label>
                <input
                    className = {`form__input ${validLocationClass}`}
                    type="text"
                    id="location"
                    name="location"
                    value={location}
                    onChange={onLocationChanged}
                />
                <label className = "form__label" htmlFor="PPM">
                Price per Mile: </label>
                <input
                    className = {`form__input ${validPPMClass}`}
                    type="text"
                    id="PPM"
                    name="PPM"
                    value={PPM}
                    onChange={onPPMChanged}
                />
                <label className = "form__label" htmlFor="username">
                    Assigned to: </label>
                <select
                    id="user"
                    name="user"
                    className="form__select"
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

export default NewCarForm




