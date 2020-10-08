import React from 'react';

import {ClientTable_Completed} from './clientTable_Completed';
import {ClientTable_OnGoing} from './clientTable_OnGoing';

export class ClientCaseManagement extends React.Component
{
  render() {
      return(
          <div>
              <h2 style={{textAlign: 'center'}}><u>Patient Case Management</u></h2>
              <ClientTable_OnGoing />
              <ClientTable_Completed />
          </div>
      );
  }
};