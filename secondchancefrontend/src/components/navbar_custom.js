import React from 'react';
import{Navbar, Nav, FormControl, Form, Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {ClientCaseManagement} from '../components/clientCaseManagement';
import DrRegister from "../components/drRegister";
import ClientRegister from "../components/clientRegister";
import {DrCaseManagement} from "../components/drCaseManagement";
import {CaseCreation} from './caseCreation'
import {DrOverlay} from '../components/drOverlay';
import { ClientTable_OnGoing } from './clientTable_OnGoing';
import {Contact} from '../components/contact';
import {Login} from '../components/login';
import {DrEdit} from "../components/drEdit";
import '../css/navbar_design.css';
import {Homepage} from "./homepage";
import pricing from './pricingPage';
import {Carousel_it} from "./carousel_it";
import {MultiBrowsePic} from './multiBrowsePic';

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

                          <Link to="/caseCreation">Case Creation</Link>

                          <Link to="/contact">Contact Us</Link>

                          <Link to="/edit">Edit</Link>

                          <Link to="/pricing">Pricing</Link>

                          <Link to={"/doctorCaseMgmt"}>Doctor Case Management</Link>

                          <Link to={"/clientCaseMgmt"}>Client Case Management</Link>


                          <Link to={"/carousel_it"}>Carousel It Test</Link>

                          MultiBrowsePic

                          <Link to={"/MultiBrowsePic"}>MultiBrowsePic</Link>
                          <Login />

                      </nav>
                      <Switch>
                          <Route exact path={'/homepage'} component={Homepage}></Route>
                          <Route exact path={'/Login'} component={Login}></Route>
                          <Route exact path={'/drRegister'} component={DrRegister}></Route>
                          <Route exact path={'/caseCreation'} component={CaseCreation}></Route>
                          <Route exact path='/contact' component={Contact}></Route>
                          <Route exact path={'/edit'} component ={DrEdit}></Route>
                          <Route exact path={'/pricing'} component={pricing}></Route>
                          <Route exact path={'/doctorCaseMgmt'} component={DrCaseManagement}></Route>
                          <Route exact path={'/clientCaseMgmt'} component={ClientCaseManagement}></Route>
                          <Route exact path={'/carousel_it'} component={Carousel_it}></Route>
                          <Route exact path={'/multiBrowsePic'} component={MultiBrowsePic}></Route>
                      </Switch>
                  </div>
              </Router>
              <br />

          </div>
        );
    }
}