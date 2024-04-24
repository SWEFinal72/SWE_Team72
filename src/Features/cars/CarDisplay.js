import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux';
import { selectCarById } from "./carsApiSlice";
import AddNewCarButton from "../../Components/AddNewCarButton";

const CarDisplay = ({ carId }) => {
    const car = useSelector(state => selectCarById(state, carId));
    const navigate = useNavigate();

    if (car) {
        const handleEdit = () => navigate(`/user_dashboard/user_reservation/${carId}`);
        const carStatus = car.rented ? '' : 'table__cell--inactive';

        return (
            <tr className="table__row car">
                <td className={`table__cell ${carStatus} label`} colSpan="8">
                    <div className="car-info">
                        <div className="label-item">Make:</div>
                        <div className="value-item">{car.carInfo[0]["car-brand"]}</div>
                    </div>
                    <div className="car-info">
                        <div className="label-item">Model:</div>
                        <div className="value-item">{car.carInfo[0]["model"]}</div>
                    </div>
                    <div className="car-info">
                        <div className="label-item">Miles:</div>
                        <div className="value-item">{car.carInfo[0]["miles"]}</div>
                    </div>
                    <div className="car-info">
                        <div className="label-item">Location:</div>
                        <div className="value-item">{car.carInfo[0]["location"]}</div>
                    </div>
                    <div className="car-info">
                        <div className="label-item">Cost per Mile:</div>
                        <div className="value-item">{car.carInfo[0]["cost-mile"]}</div>
                    </div>
                    <div className="car-info">
                        <div className="label-item">Cost per Day:</div>
                        <div className="value-item">{car.carInfo[0]["cost-day"]}</div>
                    </div>
                    <div className="car-info">
                        <div className="label-item">Pickup Date:</div>
                        <div className="value-item">{car.carInfo[0]["pickup"]}</div>
                    </div>
                    <div className="car-info">
                       <AddNewCarButton />
                    </div>
                </td>
            </tr>
        );
    } else return null;
}


export default CarDisplay