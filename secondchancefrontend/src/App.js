import React from 'react';

import NavbarClass from './components/navbar_custom';
import {ClientCaseManagement} from './components/clientCaseManagement';
import DrRegister from "./components/drRegister";
import ClientRegister from "./components/clientRegister";
import {DrCaseManagement} from "./components/drCaseManagement";
import {ClientCaseCreation} from './components/clientCaseCreation'
import {DrOverlay} from './components/drOverlay';
import { ClientTable_OnGoing } from './components/clientTable_OnGoing';
import {Contact} from './components/contact';
import {Login} from './components/login';
import {DrEdit} from "./components/drEdit";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {Homepage} from './components/homepage';

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

        </div>
  );
}

export default App;



