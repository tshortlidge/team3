import React from 'react';
import '../css/clientCaseManagementPage.css';
import {AcceptCasePage} from './acceptCasePage';
import {Button} from "react-bootstrap";

export class DrTable_Request extends React.Component
{
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            requestCaseStatus: 'pending',
            cases: [
                { id: 56454, caseTitle: 'Chest pain and arm hurts',  category: 'Cardiology', createDate: '08/17/20', action: <Button>Accept / Decline</Button>},
                { id: 22452, caseTitle: 'runny nose and itchy throat',  category: 'Allergy and Immunology', createDate: '08/27/20', action: <Button>Accept / Decline</Button>},
                { id: 12453, caseTitle: 'cried after watching Encino Man',  category: 'Mental', createDate: '08/27/20', action: <Button>Accept / Decline</Button>},
                { id: 49987, caseTitle: 'path_kev11741_01', category: 'Pathology', createDate: '08/29/20', action: <Button>Accept / Decline</Button>}
            ]

        }

    }



    renderTableData() {
        return this.state.cases.map((casestudy, index) => {
            const { id, caseTitle, category, createDate, action } = casestudy //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{caseTitle}</td>
                    <td>{category}</td>
                    <td>{createDate}</td>
                    <td><u>{action}</u></td>
                </tr>


            )
        })
    }

    render()
    {

        return(
            <div>
                <h1 id='title'><u>Requests:</u></h1>
                <table>
                    <thead style={{display: 'table-header-group'}}>
                    <tr>
                        <th>ID</th>
                        <th>Case Title</th>
                        <th>Category</th>
                        <th>Created On</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        );
    }
}