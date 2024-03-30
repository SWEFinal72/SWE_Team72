import AvaliablityTable from "./AvaliablityTable";
import Navbar from './Navbar';

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