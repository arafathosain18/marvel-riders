import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componant/Header/Header';
import Home from './Componant/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Componant/NoMatch/NoMatch';
import Destination from './Componant/Destination/Destination';
import Login from './Componant/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Componant/PrivateRoute/PrivateRoute';
import RidePaymant from './Componant/RidePaymant/RidePaymant';
export const userContext= createContext();


function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>{loggedInUser.email}</p>
            <Router>
              <Header></Header>
              <Switch>
                <Route path='/home'>
                <Home></Home>
                </Route>
                <PrivateRoute path='/destination'>
                  <Destination></Destination>
                </PrivateRoute>
                  <Route path='/ride'>
                      <RidePaymant></RidePaymant>
                  </Route>

                <Route path='/login'>
                  <Login></Login>
                </Route>
                <Route exact path='/'>
                  <Home></Home>
                </Route>
                <Route path="*">
                    <NoMatch />
                  </Route>
              </Switch>
            
            </Router>
    </userContext.Provider>
  );
}

export default App;
