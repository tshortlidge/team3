import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import doctor_left from '../pictures/patient_doctor_select/left_doctor.png';
import patient_right from '../pictures/patient_doctor_select/right_patient.png';
import {HoverImgBlkWhite} from "./hoverImgBlkWhite";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {Registration} from "./registration";

export class DoctorPatientSelect extends React.Component
{
    constructor(props) {
        super(props);
        this.data = {};
        this.data.picHeight = '500px';
        this.data.picWidth  = '550px';
        this.data.overlayColor = "black-strong";
        this.data.selectedUserMode = "none";
        this.state={
            showPic:true
        }


    }

    toggleShowPic(selectedMode)
    {
        this.data.selectedUserMode = selectedMode;
        this.setState(
            {
                showPic: !this.state.showPic
            }
        )
    }
    handleDoctorPic = () =>
    {
        this.toggleShowPic('Doctor');
    }

    handlePatientPic = () =>
    {
        this.toggleShowPic('Patient');

    }

    DisplaySelectionPics()
    {
        return(
            <Container style={{width: "800px"}} >

                <Row>
                    <Col>
                        <h3 style={{textAlign:"center"}}><u>Select Which Type of You Are:</u></h3>
                    </Col>
                </Row>

                <Row>

                    <Col>
                        <div onClick = {() => this.handleDoctorPic()}>

                            <HoverImgBlkWhite data={this.data} overlayText = "Sign In / Register as Doctor"
                                              imgSource = {doctor_left}

                            ></HoverImgBlkWhite>
                        </div>
                    </Col>

                    <Col >


                        <div onClick = { () => this.handlePatientPic()}>
                            <HoverImgBlkWhite data={this.data} overlayText = "Sign In / Register as Patient"
                                              imgSource = {patient_right}

                            />


                        </div>


                    </Col>

                </Row>

            </Container>
        );
    }

    SwitchToAccessPage()
    {
        if(this.state.showPic)
        {
            return(
                <div>
                    {this.DisplaySelectionPics()}
                </div>
            )
        }
        else
        {
            return(
                <div>
                    <Registration userMode={this.data.selectedUserMode}/>
                </div>
            );
        }
    }


    render()
    {

        return(
            <div>

            {this.SwitchToAccessPage()}
            </div>
        );
    }
}

