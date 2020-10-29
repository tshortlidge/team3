//props will sent in a bunch of stuff
import React from "react";
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'react-bootstrap/dist/react-bootstrap';

function DropDownMenu(data){

    return(
        <Form.Control name = {data.name} value={data.selectedBirthElement} onChange={data.handleInputChange} as={"select"} defaultValue={"January"}>

                {
                    data.dataArr.map(function(selectedBirthElement){
                        return <option value={selectedBirthElement}>{selectedBirthElement}</option>
                    })
                }

        </Form.Control>

    )
}

function DrAttritube(data)
{
    console.log(data);
    if(data.modeID === 'Doctor') {
        return (
            <div>
                <Form.Label>NPI:</Form.Label>
                <Form.Control name="npi" placeholder={"Enter National Provider Identifier"}/>



                <Form.Label>Speciality:</Form.Label>
                <Form.Control name="speciality" placeholder={"Enter Specialty"} />



                <Form.Label>Select Clinic:</Form.Label>
                <DropDownMenu name={"selectedClinic"} dataArr = {data.dataArr} />


            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

function GetTitle(data)
{
    if(data.modeID === 'Doctor')
    {
        return(<Form.Label><u className={"display-4"}>Physician Registration</u></Form.Label>);
    }
    else
    {
        return(<Form.Label><u className={"display-4"}>Patient Registration</u></Form.Label>);
    }
}


export function RegFunctionalComponent(props)
{
    let modeID = props.data.userMode;

    return(

        <div>

            <Form id={"myForm"} style={{width:"500px", margin:"auto"}}>
                <Form.Label>
                    <GetTitle modeID = {modeID}/>
                    <br />
                </Form.Label>
                <Form.Group controlId={"formEmail"}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" value={props.data.email} type={"email"} placeholder={"Enter email"}/>
                </Form.Group>

                <Form.Group controlId={"formPassword"}>
                    <Row>
                        <Col>
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" value={props.data.password} type={"password"} placeholder={"Enter Password"} />
                        </Col>
                        <Col>
                            <Form.Label>Repeat Password</Form.Label>
                            <Form.Control name="repassword" value={props.data.repassword} type={"password"} placeholder={"Re-Enter Password"} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group controlId={"formName"}>
                    <Form.Label>Name</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control name="firstName" value={props.data.firstName} placeholder={"Enter First name"}/>
                        </Col>
                        <Col>
                            <Form.Control name="lastName" value={props.data.lastName} placeholder={"Enter Last name"}/>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Label>Birthday</Form.Label>
                <Row>

                    <Col>
                        <DropDownMenu name={"selectedBirthMonth"} dataArr = {props.data.date.month} />
                    </Col>
                    <Col>
                        <DropDownMenu name={"selectedBirthDay"} dataArr = {props.data.date.day} />
                    </Col>
                    <Col>
                        <DropDownMenu name={"selectedBirthYear"} dataArr = {props.data.date.year} />
                    </Col>

                </Row>



                    <DrAttritube modeID={modeID} dataArr = {props.data.hospitalNameArr}/>


                <Form.Label>Bio:</Form.Label>
                        <br />
                        <Form.Control name={"bio"} as={"textarea"} rows={3} cols={100}/>

                    <Row>
                        <Button type="button" onClick={props.handleSubmit}>Register</Button>
                    </Row>
            </Form>
        </div>

    )
}