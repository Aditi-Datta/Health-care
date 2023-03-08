import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  link
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Register from './Pages/Login/Register';

import ContactUs from './Pages/Home/ContactUs/ContactUs';
import AboutUs from './Pages/Home/AboutUs/AboutUs';

import Login from './Pages/Login/Login';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/privateRoute/privateRoute';
import UserDashboard from './Pages/UserDashboard/UserDashboard';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
import DoctorDashboard from './Pages/DoctorDashboard/DoctorDashboard';

function App() {
  return (
    <div className="App">
   
    <AuthProvider>
    <Router>
    <Switch>
    <Route exact path="/">
       <Home />
    </Route>
    <Route path="/home">
      <Home />
    </Route>
    <PrivateRoute path='/dashboard'>
    <UserDashboard></UserDashboard>
    </PrivateRoute>

    <PrivateRoute path='/adminDashboard'>
    <AdminDashboard/>
    </PrivateRoute>

    <PrivateRoute path='/doctorDashboard'>
    <DoctorDashboard/>
    </PrivateRoute>

    <Route path="/register">
       <Register></Register>
    </Route>
    <Route path="/login">
       <Login></Login>
    </Route>
    <Route path="/aboutUs">
       <AboutUs />
    </Route>
  
    <Route path="/aboutUs">
       <AboutUs />
    </Route>
    <Route path="/contactUs">
       <ContactUs />
    </Route>



   
   
    </Switch>
    </Router>
    </AuthProvider>
    
    </div>
  );
}

export default App;
