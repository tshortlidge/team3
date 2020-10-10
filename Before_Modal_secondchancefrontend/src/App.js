import React from 'react';

import {ClientCaseManagement} from './component/clientCaseManagement';
import DrRegister from "./component/drRegister";
import ClientRegister from "./component/clientRegister";
import {DrCaseManagement} from "./component/doctorCaseManagement";
import {ClientCaseCreation} from './component/clientCaseCreation'
import {DrOverlay} from './component/drOverlay';
import { ClientOnGoingTable } from './component/clientOnGoingTable';
import {Contact} from './component/contact';
import {Login} from './component/login';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
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
    <div className="App">

        <div className="App">
            <Router>
                <div className="App">
                    <table className="App-header">
                        <tr>
                            <td><Link to="/">Home</Link></td>


                            <td><Link to={"/Login"}>Login</Link></td>


                            <td><Link to="/drRegister">Doctor Registration</Link></td>


                            <td><Link to="/contact">Contact Us</Link></td>

                        </tr>
                    </table>
                    <Switch>
                        <Route exact path={'/Login'} component={Login}></Route>
                        <Route exact path='/drRegister' component={DrRegister}></Route>
                        <Route exact path='/contact' component={Contact}></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    </div>
  );
}

export default App;
