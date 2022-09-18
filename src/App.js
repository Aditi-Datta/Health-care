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
import Login from './Pages/Login/Login';

import ContactUs from './Pages/Home/ContactUs/ContactUs';
import AboutUs from './Pages/Home/AboutUs/AboutUs';

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
         <Register />
      </Route>
      <Route path="/login">
         <Login />
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
