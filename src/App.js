import logo from './logo.svg';
import './index.css';
import './Components/Navbar';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';
import CarsAndServices from './Components/CarsAndServices';
import CurrentReservations from './Components/CurrentReservations';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
