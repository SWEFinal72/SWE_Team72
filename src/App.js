import logo from './logo.svg';
import './index.css';
import './Components/Navbar';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';
import CarsAndServices from './Components/CarsAndServices';
import CurrentReservations from './Components/CurrentReservations';

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
            element={<CarsAndServices />}
        ></Route>
        <Route
            exact
            path="/cars_and_services"
            element={<CurrentReservations />}
        ></Route>
    </Routes>
    </Router>
  );
}

export default App;
