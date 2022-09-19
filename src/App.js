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

function App() {
  return (
    <div className="App">
   
    <Router>
      <Switch>
      <Route exact path="/">
         <Home />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/register">
         <Register></Register>
      </Route>
      <Route path="/login">
         <Login></Login>
      </Route>
      <Route path="/aboutUs">
         <AboutUs />
      </Route>
      <Route path="/contactUs">
         <ContactUs />
      </Route>
      </Switch>
      </Router>
    
    </div>
  );
}

export default App;
