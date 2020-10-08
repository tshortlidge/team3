import React from 'react';

import {DrTable_Request} from './drTable_Request';
import {DrTable_OnGoing} from './drTable_OnGoing';
import {DrTable_Completed} from './drTable_Completed';

export class DrCaseManagement extends React.Component
{
  render() {
      return(
          <div>
              <h2 style={{textAlign: 'center'}}><u>Doctor Case Management</u></h2>
              <DrTable_OnGoing />
              <DrTable_Request />
              <DrTable_Completed />
          </div>
      );
  }
};