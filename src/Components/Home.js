import AvaliablityTable from "./AvaliablityTable";
import Navbar from './Navbar';
import { Link } from "react-router-dom";

function Home() {
    
    return(
        <div> 

        <div> 
             <Navbar/>
        </div>
       
        <div className="Home-div">
          
            <AvaliablityTable />
        </div>
        
        
        </div>
      
    )
}

export default Home;