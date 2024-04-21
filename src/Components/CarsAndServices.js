import { useGetcarsQuery } from "../Features/cars/carsApiSlice";
import CarDisplay from "../Features/cars/CarDisplay";


const AvailableCarsList = () => {
  const { data: cars, isLoading, isSuccess, isError, error } = useGetcarsQuery(undefined, {
    pollingInterval: 15000,
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true
  });

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  } else if (isSuccess ) {
    // Ensure cars is an array before mapping over it
    const { ids } = cars;
    const tableContent = ids?.length
        ? ids.map(carId => <CarDisplay key={carId} carId={carId} />)
        : null;


    content = (
      <table className="table table--cars">
        {/* <thead className="table__thead">
          <tr>
            <th scope="col" className="table__th car__make">Make</th>
            <th scope="col" className="table__th car__model">Model</th>
            <th scope="col" className="table__th car__miles">Miles</th>
            <th scope="col" className="table__th car__location">Location</th>
            <th scope="col" className="table__th car__cost-mile">Cost per Mile</th>
            <th scope="col" className="table__th car__cost-day">Cost per Day</th>
            <th scope="col" className="table__th car__pickup">Pickup Date</th>
           
          </tr>
        </thead> */}
        <tbody>
          {tableContent}
        </tbody>
      </table>
    );
  } else {
    // Handle other cases where cars data is not an array
    content = <p>No cars available.</p>;
  }

  return content;
}

export default AvailableCarsList;
