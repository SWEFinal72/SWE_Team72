
import './index.css';
import './Components/Navbar';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';
import CarsAndServices from './Components/CarsAndServices';
import CurrentReservations from './Components/CurrentReservations';
import Login from './auth/Login';
import SignUp from './Components/SignUp';
import Layout from './Components/Layout';
import Dashboard from './Components/Dashboard';
import UserReservations from './Components/UserReservations';
import UserProfile from './Components/UserProfile'; 
import EditUser from './Features/users/EditUser';
import NewUserForm from './Features/users/NewUserForm';
import EditCar from './Features/cars/EditCar';
import NewCar from './Features/cars/NewCar';
import Prefetch from './auth/Prefetch';

function App() {
  return (
    <Routes>
        <Route path ="/" element ={<Layout />}>
            <Route index element={<Home />} />
            <Route path="current_reservations" element={<CurrentReservations />} />
            <Route path="cars_and_services" element={<CarsAndServices />} />
            <Route path ="login" element={<Login />} />

            <Route element={<Prefetch />}> 
            <Route path ="user_dashboard" element={<Dashboard/>} >
                <Route index element={<UserProfile/>} />

                <Route path=":id"element={<EditUser/>} />
                <Route path="new"element={<NewUserForm/>} />
           
            <Route path ="user_reservations" >
                <Route index element={<UserReservations/>} />
                <Route path=":id"element={<EditCar/>} />
                <Route path="new"element={<NewCar/>} />
            </Route>

            
            </Route>
            </Route>
            
        </Route>

    </Routes>
  );
}

export default App;




//check how he does conditional routing to dashboard content 









{/* <Router>
<Navbar />
<Routes>
  <Route
      exact
      path="/"
      element={<Home />}
  ></Route>
  <Route
      exact
      path="/current_reservations"
      element={<CurrentReservations />}
  ></Route>
  <Route
      exact
      path="/cars_and_services"
      element={<CarsAndServices />}
  ></Route>
  <Route
      exact
      path="/login-button"
      element={<Login/>}
  ></Route>
  <Route
      exact
      path="/signup-button"
      element={<SignUp/>}
  ></Route>
</Routes>
</Router> */}