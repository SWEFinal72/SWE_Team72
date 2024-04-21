import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux';
import { selectCarById } from "./carsApiSlice";


const Car = ({ carId }) => {
    const car = useSelector(state => selectCarById(state, carId));
    const navigate = useNavigate();

    if (car) {
        const handleEdit = () => navigate(`/user_dashboard/user_reservation/${carId}`);
        const carStatus = car.rented ? '' : 'table__cell--inactive';

        return (
            <div className={`car-details ${carStatus}`}>
                <div className="car-detail">{car.carInfo[0]["car-brand"]}</div>
                <div className="car-detail">{car.carInfo[0]["model"]}</div>
                <div className="car-detail">{car.carInfo[0]["miles"]}</div>
                <div className="car-detail">{car.carInfo[0]["location"]}</div>
                <div className="car-detail">{car.carInfo[0]["cost-mile"]}</div>
                <div className="car-detail">{car.carInfo[0]["cost-day"]}</div>
                <div className="car-detail">{car.carInfo[0]["pickup"]}</div>
                <div className="car-detail">
                    <button
                        className="icon-button table__button"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </div>
            </div>
        );
    } else return null;
}

export default Car;