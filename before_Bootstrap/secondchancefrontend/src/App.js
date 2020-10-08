import React from 'react';

import {ClientCaseManagement} from './components/clientCaseManagement';
import DrRegister from "./components/drRegister";
import ClientRegister from "./components/clientRegister";
import {DrCaseManagement} from "./components/drCaseManagement";
import {ClientCaseCreation} from './components/clientCaseCreation'
import {DrOverlay} from './components/drOverlay';
import { ClientOnGoingTable } from './components/clientOnGoingTable';
import {Contact} from './components/contact';
import {Login} from './components/login';
import {DrEdit} from "./components/drEdit";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './css/animatedBackground.scss'
function App() {
    /*

              <DrRegister />
              <ClientCaseManagement />
              <ClientRegister />
              <DrCaseManagement />
              <DrOverlay />
              <Contact />

     */

  return (


        <div className="App" >

            <Router>
                <div className="App">

                    <table className="App-header">
                        <tr>
                            <td><Link to="/">Home</Link></td>


                            <td><Link to={"/Login"}>Login</Link></td>


                            <td><Link to="/drRegister">Doctor Registration</Link></td>

                            <td><Link to="/clientCaseCreation">Client Case Creation</Link></td>

                            <td><Link to="/contact">Contact Us</Link></td>

                            <td><Link to="/edit">Edit</Link></td>

                        </tr>
                    </table>
                    <Switch>
                        <Route exact path={'/Login'} component={Login}></Route>
                        <Route exact path={'/drRegister'} component={DrRegister}></Route>
                        <Route exact path={'/clientCaseCreation'} component={ClientCaseCreation}></Route>
                        <Route exact path='/contact' component={Contact}></Route>
                        <Route exact path={'/edit'} component ={DrEdit}></Route>
                    </Switch>
                </div>
            </Router>

        </div>


  );
}

export default App;
