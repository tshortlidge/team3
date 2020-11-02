/* eslint max-len: 0 */
import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, ColumnToggle  } from 'react-bootstrap-table2-toolkit';

import {Container} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

const {SearchBar} = Search;


const columns = [{
    dataField: 'id',
    text: 'Case ID',
    sort: true
}, {
    dataField: 'doctorName',
    text: 'Doctor',
    sort: true
}, {
    dataField: 'comment',
    text: 'Diagnosis',
    sort: true
}, {
    dataField: 'record_assessment_id',
    text: 'Record Assessment ID',
    sort: true
}, {
    dataField: 'record_id',
    text: 'Record ID',
    sort: true
}, {
    dataField: 'completion_dt',
    text: 'Date Completed',
    sort: true
}, {
    dataField: 'create_dt',
    text: 'Date Created',
    sort: true
}, {
    dataField: 'status',
    text: 'Case Status',
    sort: true
}];

const defaultSorted = [{
    dataField: 'id',
    order: 'desc'
}];




export class ClientTable_OnGoing extends React.Component
{

    constructor() {
        super();
        this.state = {
            parsedJSONObj: [],
            error: null
        };

        this.data={};
        this.data.dataArray = []
    }

    componentDidMount() {
        //Obtain patient's id through props
        //let patient_id = this.props.pat_id;

        let patient_id = 1;
        console.log("Testing get_all_patient_records POST from Client Ongoing Table");

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"pat_id": patient_id})
        };

        fetch("http://52.247.220.137/get_all_patient_records", requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                   // console.log(result);
                    this.setState({
                        parsedJSONObj: result
                    })
                },

                (error) => {
                    console.log("Error with JSON retrieval for Client Ongoing Case Table.");
                    console.log(error.data);

                }
            );





        //this.state.parsedJSONObj.map(something => (console.log("ddd " + {something})));



    }

    InsertData() {
        this.state.parsedJSONObj.map(
            (searchParsedJSONObj, index) =>
            {

                this.data.dataArray.push({
                    id: searchParsedJSONObj.id,
                    doctorName: 'NEED TO ASK ERIC FOR PHYSICIAN NAME',
                    comment: searchParsedJSONObj.comment,
                    record_assessment_id: searchParsedJSONObj.record_assessment_id,
                    record_id: searchParsedJSONObj.record_id,
                    completion_dt: searchParsedJSONObj.completion_dt,
                    create_dt: searchParsedJSONObj.create_dt,
                    status: searchParsedJSONObj.status,

                });

            }
            )

        this.data.dataArray.map((kk) => { console.log(kk)});




    }

    RunME(){
        console.log("GIVE IT TO0");
        this.state.parsedJSONObj.map((variableName,index) => { console.log(variableName.assessment) });

        //this.InsertData();
    }


    render() {
        return (
            <div>
                <Container>
                    { this.InsertData()}
                    <ToolkitProvider
                        keyField="id"
                        data={ this.state.parsedJSONObj }
                        columns={ columns }
                        defaultSorted={ defaultSorted }
                        columnToggle
                        search
                    >
                        {
                            props => (
                                <div>
                                    <h3>Input something at below input field:</h3>
                                    <SearchBar { ...props.searchProps } />
                                    <hr />
                                    <BootstrapTable
                                        { ...props.baseProps }
                                    />
                                </div>
                            )
                        }
                    </ToolkitProvider>
                </Container>

            </div>
        );
    }
}