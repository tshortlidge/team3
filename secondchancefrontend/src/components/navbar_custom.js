import React from 'react';
import{Navbar, Nav, FormControl, Form, Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {ClientCaseManagement} from '../components/clientCaseManagement';
import {Registration} from './registration';
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
import {Testimonial_Slider} from './testimonial_slider';

function NavbarModes(modeID)
{
    console.log("FROM the inner " + modeID)
    if(modeID === 'patient')
    {
        console.log("patient1");
        return ( <PatientNavBar /> );
    }
    else if(modeID === 'doctor')
    {
        console.log("patient2");
        return ( <DoctorNavBar /> );
    }
    else    //If not logged in
    {
        console.log("patient3");
        return (
            <div>
                <NewUserNavBar />
            </div>
        );
    }

}

function NewUserNavBar()
{
    return(
        <div>
            <Router>
                <div>

                    <nav className={'navbarDesign'}>

                        <Link to="/">Home</Link>

                        <Link to="/contact">Contact Us</Link>

                        <Link to="/pricing">Pricing</Link>

                        <Login />

                    </nav>
                    <Switch>
                        <Route exact path={'/'} component={Homepage}></Route>
                        <Route exact path={'/Login'} component={Login}></Route>
                        <Route exact path='/contact' component={Contact}></Route>
                        <Route exact path={'/pricing'} component={pricing}></Route>
                    </Switch>
                </div>
            </Router>
            <br />

        </div>
    );
}

function PatientNavBar()
{
    return(
        <div>
            <Router>
                <div>

                    <nav className={'navbarDesign'}>

                        <Link to="/">Home</Link>

                        <Link to="/contact">Contact Us</Link>

                        <Link to="/edit">Edit</Link>

                        <Link to="/pricing">Pricing</Link>

                        <Link to={"/clientCaseMgmt"}>Client Case Management</Link>

                        <Login />

                    </nav>
                    <Switch>
                        <Route exact path={'/'} component={Homepage}></Route>
                        <Route exact path={'/Login'} component={Login}></Route>
                        <Route exact path='/contact' component={Contact}></Route>
                        <Route exact path={'/edit'} component ={DrEdit}></Route>
                        <Route exact path={'/pricing'} component={pricing}></Route>
                        <Route exact path={'/doctorCaseMgmt'} component={DrCaseManagement}></Route>
                        <Route exact path={'/clientCaseMgmt'} component={ClientCaseManagement}></Route>


                    </Switch>
                </div>
            </Router>
            <br />

        </div>
    );

}


function DoctorNavBar()
{
    //user personalID and pass as props into all the other pages to display that user's info for tables
    return(
        <div>
            <Router>
                <div>

                    <nav className={'navbarDesign'}>

                        <Link to="/">Home</Link>

                        <Link to="/contact">Contact Us</Link>

                        <Link to="/edit">Edit</Link>

                        <Link to="/pricing">Pricing</Link>

                        <Link to={"/doctorCaseMgmt"}>Doctor Case Management</Link>


                        <Login />

                    </nav>
                    <Switch>
                        <Route exact path={'/'} component={Homepage}></Route>
                        <Route exact path={'/Login'} component={Login}></Route>
                        <Route exact path={'/registration'} component={Registration}></Route>
                        <Route exact path={'/caseCreation'} component={CaseCreation}></Route>
                        <Route exact path='/contact' component={Contact}></Route>
                        <Route exact path={'/edit'} component ={DrEdit}></Route>
                        <Route exact path={'/pricing'} component={pricing}></Route>
                        <Route exact path={'/doctorCaseMgmt'} component={DrCaseManagement}></Route>
                        <Route exact path={'/clientCaseMgmt'} component={ClientCaseManagement}></Route>
                        <Route exact path={'/carousel_it'} component={Carousel_it}></Route>
                        <Route exact path={'/multiBrowsePic'} component={MultiBrowsePic}></Route>
                        <Route exact path={'/testimonial_slider'} component={Testimonial_Slider}></Route>

                    </Switch>
                </div>
            </Router>
            <br />

        </div>
    );
}

export default class NavbarClass extends React.Component
{

    constructor(props) {
        super(props);
        this.data={};
        this.data.modeID= 'patient';
    }


    render() {
        console.log("FROM the outter " + this.data.modeID);
        return(
          <div>
              {NavbarModes(this.data.modeID)}
              <br />

          </div>
        );
    }
}