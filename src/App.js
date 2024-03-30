
import './index.css';
import './Components/Navbar';

import Home from './Components/Home';
import {Router, Routes, Route } from 'react-router-dom'
import CarsAndServices from './Components/CarsAndServices';
import CurrentReservations from './Components/CurrentReservations';
import Layout from './Components/Layout';
import Login from './features/login';
import Dashboard from './Components/Dashboard';
import UserProfile from './Components/UserProfile';
import UserReservations from './Components/UserReservations';
import AdminDashboard from './Components/AdminDashboard';
import AdminProfile from './Components/AdminProfile';
import EmployeeDashboard from './Components/EmployeeDashboard';
import EmployeeProfile from './Components/EmployeeProfile';
import EmployeeReservations from './Components/EmployeeReservations';

function App() {
 
  //need to do conditional routing based on user type logging in 

  // we need a way go back to whoever logged in and then route them to the correct dashboard, from home
  // we need to conditionally render the navbar based on the user type
  // we need to conditionally render the dashboard based on the user type
  // have state for logged in and out and render login/signup if logged out or dashboard if logged in
  //have states for type of user logged in to render the correct dashboard
  // 

  return (


    <Routes>
        <Route path ="/"element ={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/current_reservations" element={<CurrentReservations />} />
            <Route path="/cars_and_services" element={<CarsAndServices />} />
            <Route path ="/login" element={<Login />} >
            

              <Route path ="/user_dashboard" element={<Dashboard/>} >
                <Route index element={<UserProfile/>} />
                <Route path ="/user_reservations" element={<UserReservations/>} />
              </Route>
    
              <Route path ="admin_dashboard" element={<AdminDashboard/>} >
                <Route index element={<AdminProfile/>} />
                <Route path ="admin_employee_creation" element={<AdminProfile/>} />
                </Route>

              <Route path ="employee_dashboard" element={<EmployeeDashboard/>} >
                <Route index  element={<EmployeeProfile/>} />
                <Route path ="employee_reservations" element={<EmployeeReservations/>} />  
              </Route>

        </Route>

      </Route>

    </Routes>


    
     

  );
}

export default App;
//  {/*        
// //             exact
// //             path="/"
// //             element={<Home />}
// //         ></Route>
// //         <Route */}
// //             exact
// //             path="/current_reservations"
// //             element={<CarsAndServices />}
// //         ></Route>
// //         <Route
// //             exact
// //             path="/cars_and_services"
// //             element={<CurrentReservations />}
// //         ></Route>
  
// //    </Routes> */}

// /* <div>
              
//                 {jwtDecode(token).admin ? (
//                   <div>
//                     <div className = "link" onClick={adminClick}>Admin</div>
//                     <div to="/login" className = "link" onClick={logoutClick}>Logout</div>
//                   </div>
                
//                 ):(
//                   <div className='dynamic lessSpace'>
//                       <div className = "link" onClick={portalClick}>Portal</div>
//                       <div to="/login" className = "link" onClick={logoutClick}>Logout</div>
//                   </div> 

//                 )}
               
//               </div>  */