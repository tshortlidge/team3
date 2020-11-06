import React from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {ClientCaseManagement} from '../components/clientCaseManagement';

import {DrCaseManagement} from "../components/drCaseManagement";

import {Contact} from '../components/contact';
import {Login} from '../components/login';
import {DrEdit} from "../components/drEdit";
import '../css/navbar_design.css';
import {Homepage} from "./homepage";
import pricing from './pricingPage';
import {OpenDrPatientSelect} from "./openDrPatientSelect";
import {CaseCreation} from './caseCreation';

import {DoctorPatientSelect} from './doctorPatientSelect'

function NavbarModes(modeID)
{

    if(modeID === 'patient')
    {

        return ( <PatientNavBar /> );
    }
    else if(modeID === 'doctor')
    {

        return ( <DoctorNavBar /> );
    }
    else    //If not logged in
    {

        return (
                <NewUserNavBar />
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

                        <Link to="/loginSelect">Login</Link>

                        <Link to={"/hoverImgTest"}>HoverImgTest</Link>
                        <Login />

                    </nav>
                    <Switch>
                        <Route exact path={'/hoverImgTest'} component={OpenDrPatientSelect}></Route>

                        <Route exact path={'/'} component={Homepage}></Route>
                        <Route exact path={'/loginSelect'} component={DoctorPatientSelect}></Route>
                        <Route exact path={'/contact'} component={Contact}></Route>
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

                        <Link to={"/caseCreate"}>Case Submission</Link>

                        <Link to={"/clientCaseMgmt"}>Client Case Management</Link>



                    </nav>
                    <Switch>
                        <Route exact path={'/'} component={Homepage}></Route>
                        <Route exact path='/contact' component={Contact}></Route>
                        <Route exact path={'/edit'} component ={DrEdit}></Route>
                        <Route exact path={'/pricing'} component={pricing}></Route>
                        <Route exact path={'/clientCaseMgmt'} component={ClientCaseManagement}></Route>
                        <Route exact path={'/caseCreate'} component={CaseCreation}></Route>


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



                    </nav>
                    <Switch>
                        <Route exact path={'/'} component={Homepage}></Route>
                        <Route exact path='/contact' component={Contact}></Route>
                        <Route exact path={'/edit'} component ={DrEdit}></Route>
                        <Route exact path={'/pricing'} component={pricing}></Route>
                        <Route exact path={'/doctorCaseMgmt'} component={DrCaseManagement}></Route>


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
        this.data.modeID= 'doctor';
    }


    render() {

        return(
          <div>
              {NavbarModes(this.data.modeID)}
              <br />

          </div>
        );
    }
}