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
import Cardiology from './Pages/UserDashboard/Department/Cardiology';
import Dental from './Pages/UserDashboard/Department/Dental';
import Neurologist from './Pages/UserDashboard/Department/Neurologist';
import Pediatric from './Pages/UserDashboard/Department/Pediatric';
import Traumatology from './Pages/UserDashboard/Department/Traumatology';
import Urology from './Pages/UserDashboard/Department/Urology';
import Xray from './Pages/UserDashboard/Department/Xray';
import Gallery from './Pages/UserDashboard/Gallery';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';

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



   <Route path='/Cardiology'>
   <Cardiology/>
   </Route>

   <Route path='/Dental'><Dental/></Route>
   <Route path='/Neurologist'> <Neurologist/> </Route>
   <Route path='/Pediatric'> <Pediatric/> </Route>
   <Route path='/Traumatology'> <Traumatology/> </Route>
   <Route path='/Urology'> <Urology/> </Route>
   <Route path='/Xray'> <Xray/> </Route>


   <Route path='/Gallery'> <Gallery/> </Route>
   

    </Switch>
    </Router>
    </AuthProvider>
    
    </div>
  );
}

export default App;
