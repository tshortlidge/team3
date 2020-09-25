import React from 'react';
import './App.css';
import {ClientCaseManagement} from './components/clientCaseManagement';
import DrRegister from "./components/drRegister";
import ClientRegister from "./components/clientRegister";
import {DrCaseManagement} from "./components/doctorCaseManagement";
import {ClientCaseCreation} from './components/clientCaseCreation'

import { ClientOnGoingTable } from './components/clientOnGoingTable';
import {Contact} from './components/testContact';

function App() {
    /*

              <DrRegister />
              <ClientCaseManagement />
              <ClientRegister />
              <DrCaseManagement />
              <Contact />

     */

  return (
    <div className="App">

        <ClientCaseCreation />
    </div>
  );
}

export default App;
