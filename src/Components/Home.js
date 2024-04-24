import AvaliablityTable from "./AvaliablityTable";
import Navbar from './Navbar';
import { Link } from "react-router-dom";
import wordmark from '../images/RoadsterRentalsWordmark.png'

function Home() {

    return (
        <div>

            <div>
                <Navbar />
            </div>
            <br/>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img
                    src={wordmark}
                    width="300"
                    height="120"
                    className="d-inline-block align-top"
                    alt="Roadster Rentals wordmark"
                >
                </img>
            </div>
            <br/>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                Make a reservation below!
            </div>

            <div className="Home-div">

                <AvaliablityTable />
            </div>


        </div>

    )
}

export default Home;