import UserReservations from "./UserReservations";
import UserProfile from "./UserProfile";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import DashHeader from "./UserHeader";
import DashFooter from "./Footer";

function Dashboard() {
  return (
    <>
    <DashHeader />
    
    <div>
      <Outlet />
    </div>
    <DashFooter />
    
    </>
    // <div>
 
    //   <h1>Dashboard</h1>
    //   <div>
    //     <Link to="/login/user_dashboard">
          
    //     <UserProfile />
    //     </Link>
   
    //   </div>
     
    //   <div>
    //     <Link to="/login/user_dashboard/user_reservations">
    //     <UserReservations />
    //     </Link>
    
    //   </div>
   
    // </div>
  );
}
export default Dashboard;