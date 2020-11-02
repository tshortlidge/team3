import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, ColumnToggle  } from 'react-bootstrap-table2-toolkit';

import {Button, Container} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

const {SearchBar} = Search;

export class GenerateSortableTable extends React.Component
{

    constructor() {
        super();
        this.state = {
            parsedJSONObj: [],
            improvedArray:[
                {
                    assessment: '',
                    comment: '',
                    completion_dt: '',
                    create_dt: '',
                    pat_id: '',
                    physician_id: '',
                    record_id: null,
                    status: '',
                    cancelButton: null
                }
            ], //this array will have everything parsedJSONObj, but will include a url to caseID and cancel buttons
            error: null
        };

    }

    componentDidMount() {

        console.log("Testing get_all_patient_records POST from Client Ongoing Table");


        fetch(this.props.incomingData.URL_for_Fetch, this.props.incomingData.requestOptions)
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


    }



    RunME(){
        console.log("GIVE IT TO0");
        this.state.parsedJSONObj.map((variableName,index) => { console.log(variableName.assessment) });

        //this.InsertData();
    }

    appendCancelButtonToArrayHandle(id)
    {
        //Send a request to backend to cancel case with id
        console.log("I am canceling Case# " + id);

        this.state.parsedJSONObj.map((eachElement) =>
            {
                this.setState({
                    //improvedArray.wf: eachElement.assessment;
                })
            }
        )
    }

    AppendButtonsToArray()
    {
        this.state.parsedJSONObj.map((eachEntry, index) =>
        {
            this.state.parsedJSONObj.push( "hello" )
        })
    }


    render() {
        return (
            <div>
                {this.AppendButtonsToArray()}
                <Container>
                    <ToolkitProvider
                        keyField="id"
                        data={ this.state.parsedJSONObj }
                        columns={ this.props.incomingData.columns }
                        defaultSorted={ this.props.incomingData.defaultSorted }
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