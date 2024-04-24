import { useGetcarsQuery } from "./carsApiSlice";
import  Car  from "./Car";
import useAuth from "../../hooks/useAuth"



const CarsList = () => {
    const {username, isEmployee, isAdmin } = useAuth()

    const {
        data: cars,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetcarsQuery(CarsList,{
        pollingInterval: 15000,
        refetchOnMountOrArgChange: true,
        refetchOnFocus: true
    }
    );

    let content;

    if (isLoading) content = <p>Loading...</p>;

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>;
    }

    if (isSuccess) {
        const { ids, entities } = cars;

        let filteredIds
        if (isEmployee || isAdmin) {
            filteredIds = [...ids]
        } else {
            filteredIds = ids.filter(noteId => entities[noteId].username === username)
        }

        const tableContent = ids?.length && filteredIds.map(carId => <Car key={carId} carId={carId} />)

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
                        
                        <th scope="col" className="table__th car__edit">Edit</th>
                    </tr>
                </thead> */}
                <tbody>
                    <tr>
                        <td>
                            <div>
                            {tableContent}
                            </div>
                      
                        </td>
                  
                    </tr>
                  
                </tbody>
            </table>
        );
    }
    
    return content;
}

export default CarsList