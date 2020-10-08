import React from 'react';
import{Navbar, Nav, FormControl, Form, Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {ClientCaseManagement} from '../components/clientCaseManagement';
import DrRegister from "../components/drRegister";
import ClientRegister from "../components/clientRegister";
import {DrCaseManagement} from "../components/drCaseManagement";
import {ClientCaseCreation} from '../components/clientCaseCreation'
import {DrOverlay} from '../components/drOverlay';
import { ClientTable_OnGoing } from './clientTable_OnGoing';
import {Contact} from '../components/contact';
import {Login} from '../components/login';
import {DrEdit} from "../components/drEdit";
import '../css/navbar_design.css';
import {Homepage} from "./homepage";
import pricing from './pricingPage';

export default class NavbarClass extends React.Component
{
    render() {
        return(
          <div>
              <Router>
                  <div>

                      <nav className={'navbarDesign'}>
                          <Link to="/homepage">Home</Link>
                          <Link to="/drRegister">Doctor Registration</Link>

                          <Link to="/clientCaseCreation">Client Case Creation</Link>

                          <Link to="/contact">Contact Us</Link>

                          <Link to="/edit">Edit</Link>

                          <Link to="/pricing">Pricing</Link>

                          <Link to={"/doctorCaseMgmt"}>Doctor Case Management</Link>

                          <Link to={"/clientCaeMgmt"}>Client Case Management</Link>
                          <Login />

                      </nav>
                      <Switch>
                          <Route exact path={'/homepage'} component={Homepage}></Route>
                          <Route exact path={'/Login'} component={Login}></Route>
                          <Route exact path={'/drRegister'} component={DrRegister}></Route>
                          <Route exact path={'/clientCaseCreation'} component={ClientCaseCreation}></Route>
                          <Route exact path='/contact' component={Contact}></Route>
                          <Route exact path={'/edit'} component ={DrEdit}></Route>
                          <Route exact path={'/pricing'} component={pricing}></Route>
                          <Route exact path={'/doctorCaseMgmt'} component={DrCaseManagement}></Route>
                          <Route exact path={'/clientCaeMgmt'} component={ClientCaseManagement}></Route>
                      </Switch>
                  </div>
              </Router>
              <br />

          </div>
        );
    }
}