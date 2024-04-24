import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddNewCarButton = () => {
  const navigate = useNavigate();

  const handleAddNewCar = () => {
    navigate("/user_dashboard/user_reservations/new"); // Navigate to the page where users can add a new car
  };

  return (
    <button className="add-car-button" onClick={handleAddNewCar}>
      <FontAwesomeIcon icon={faPlus} /> Add New Car
    </button>
  );
};

export default AddNewCarButton;
