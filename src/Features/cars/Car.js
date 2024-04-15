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
            <tr className="table__row car">
                <td className={`table__cell ${carStatus}`}>{car.carInfo[0]["car-brand"]}</td>
                <td className={`table__cell ${carStatus}`}>{car.carInfo[0]["model"]}</td>
                <td className={`table__cell ${carStatus}`}>{car.carInfo[0]["miles"]}</td>
                <td className={`table__cell ${carStatus}`}>{car.carInfo[0]["location"]}</td>
                <td className={`table__cell ${carStatus}`}>{car.carInfo[0]["cost-mile"]}</td>
                <td className={`table__cell ${carStatus}`}>{car.carInfo[0]["cost-day"]}</td>
                <td className={`table__cell ${carStatus}`}>{car.carInfo[0]["pickup"]}</td>
                <td className={`table__cell ${carStatus}`}>
                    <button
                        className="icon-button table__button"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </td>
            </tr>
        );
    } else return null;
}

export default Car