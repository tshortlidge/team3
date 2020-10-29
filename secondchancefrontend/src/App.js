import React from 'react';

import NavbarClass from './components/navbar_custom';
import {ClientCaseManagement} from './components/clientCaseManagement';
import DrRegister from "./components/drRegister";
import ClientRegister from "./components/clientRegister";
import {DrCaseManagement} from "./components/drCaseManagement";
import {CaseCreation} from './components/caseCreation'
import {DrOverlay} from './components/drOverlay';
import { ClientTable_OnGoing } from './components/clientTable_OnGoing';
import {Contact} from './components/contact';
import {Login} from './components/login';
import {DrEdit} from "./components/drEdit";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {Homepage} from './components/homepage';
import Header from './views/header';
import Body from './views/body';
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

            <NavbarClass />
<Header />
<Body />
        </div>
  );
}

export default App;



