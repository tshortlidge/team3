import React from 'react';
import {PicCarousel} from './picCarousel';
import {MultiBrowsePic} from './multiBrowsePic';
import {people1} from './data/data';
import {Row, Col, Button, Form, Container} from 'react-bootstrap';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {Caller_SwipeCardAnimation} from './caller_SwipeCardAnimation';
import {MDBInput} from "mdbreact";
import {PatientSlidePanel} from "./patientSidePanel";
import 'mdbreact/dist/css/mdb.css';
import 'mdbreact/dist/css/style.css';

export class CaseCreation extends React.Component
{
    constructor(props) {
        super(props);
        this.state =
            {
                pat_notes: '',  //Details that patients can add to case
                patientSelectedCategory: ''
            };
        this.data = {
            pat_email: '',  //For identifying who the case belongs to
            phy_email: '',
            phy_firstName: '',
            phy_lastName: '',
            phy_bio: '',
            phy_spec: '',
            phy_hospital: '',
            pics: '',    //Images of the patient for the case
            caseTitle: '',
            userID: '1', //0 -> Doctor User, 1 -> Patient User
            show: false,
            prim_case_name: 'Menstrual Cramps',
            prim_case_description: 'Patient seems to exhibit abnormal menstrual cramps. X-rays shows vitamin D3 and Calcium deficiency' +
                '. Course of action is to prescribe Oxycodone and oral vitamin supplements.'

        };

        this.drModeID = '0';  //ID for a doctor user
        this.patModeID = '1'; //ID for a patient user
        this.selectedDoctorInfo={};
    }

    pageTitleUserDisplay = () =>
    {
        if(this.data.userID === this.patModeID)
        {
            return(
                <Form.Label>
                    <h2><u>Submit Case for Second Opinion</u></h2>
                </Form.Label>
            );
        }
        else
        {
            return(
                <Form.Label>
                    <h1>Submit Case</h1>
                </Form.Label>
            );
        }
    }

    categoryTitleUserDisplay = () =>
    {
        console.log(this.data.userID + " - pat - " + this.patModeID);

        if(this.data.userID === this.patModeID)
        {
            return <h3 style={{display:"inline"}}>Category for Second Opinion:</h3>
        }
        else
        {
            return <h3 style={{display:"inline"}}>Category:</h3>
        }

    }

    viewOrAddPicMode = () =>
    {
        //if
        if(this.data.userID === this.patModeID)
        {
            return (<PicCarousel />)
        }
        else
        {
            return (<MultiBrowsePic/>)
        }

    }



    descriptionTitleUserDisplay = () =>
    {
        if(this.userID === this.patModeID) {
            return (
                <div>
                    <label>
                        Description (Optional):
                        <br/>
                        <textarea name="pat_notes" rows="5" cols="100" value={this.state.pat_notes}
                                  onChange={this.handleInputChange}/>
                    </label>
                </div>

            );
        }
        else
        {
            return(
                <label>
                    Description:
                    <br />
                    <textarea  name="pat_notes" rows="20" cols="100" value={this.state.pat_notes} onChange={this.handleInputChange}/>
                </label>
            );
        }

    }

    handleSelectDoctor ()
    {
        return(<Caller_SwipeCardAnimation />);
    }




    drCaseCreationComponents()
    {
        return(
            <div>
                <PatientSlidePanel pat_data={this.data}/>
                <Form style={{textAlign:"center"}}>
                    {this.pageTitleUserDisplay()}
                    <br />


                        <Container style={{width:"1000px", margin:"auto", border:"0px"}}>
                            <Row>
                                <Col style={{width:"0px", marginLeft:"200px", border:"0px"}}>
                                    <h3 style={{width:"250px", margin:"0px", border:"0px", textAlign:"right"}}>Name for Case:</h3>
                                </Col>
                                <Col >
                                    <p style={{width:"500px", margin:"0px", border:"0px", textAlign:"left"}}>{this.data.prim_case_description}</p>
                                </Col>
                            </Row>
                        </Container>

                    <br />



                    {this.viewOrAddPicMode()}

                    <Row>
                        <Col style={{width: "600px", margin:"auto"}}>
                            <Form.Label style={{width: "500px", marginLeft:"45%", marginRight:"1px"}}>

                                {this.categoryTitleUserDisplay()}
                                <Form.Control name={"patientSelectedCategory"} as={"select"} defaultValue={"January"}
                                              value={this.state.value} onChange={this.handleInputChange}>
                                    <option value="Allergy and Immunology">Allergy and Immunology</option>
                                    <option value="Endovascular Surgical Neuroradiology">Endovascular Surgical Neuroradiology</option>
                                    <option value="Gastroenterology">Gastroenterology</option>
                                    <option value="General Surgery">General Surgery</option>
                                    <option value="Hematology">Hematology</option>
                                    <option value="Musculoskeletal Radiology">Musculoskeletal Radiology</option>
                                    <option value="Neurology">Neurology</option>
                                    <option value="Orthopaedics">Orthopaedics</option>
                                    <option value="Otolaryngology">Otolaryngology</option>
                                    <option value="Pathology">Pathology</option>
                                    <option value="Pediatric">Pediatric</option>
                                    <option value="Radiation Oncology">Radiation Oncology</option>
                                    <option value="Reproductive Endocrinology and Infertility">Reproductive Endocrinology and Infertility</option>
                                    <option value="Spinal Cord Injury Medicine">Spinal Cord Injury Medicine</option>
                                    <option value="Sports Medicine">Sports Medicine</option>
                                    <option value="Thoracic Surgery">Thoracic Surgery</option>
                                    <option value="Vascular and Interventional Radiology">Vascular and Interventional Radiology</option>
                                </Form.Control>
                            </Form.Label>
                        </Col>
                        <Col style={{width: "50px"}}>
                            <Caller_SwipeCardAnimation />
                        </Col>
                    </Row>
                    <br />

                    <br />

                    {this.descriptionTitleUserDisplay()}

                    <br />

                    <button name="submit" style={{display:"inline"}} onClick={this.handleSubmit}>Submit</button>


                </Form>
            </div>
        );
    }
    handleInputChange = (event) =>
    {
        this.setState(
            {
                [event.target.name]: event.target.value
            })
    }

    handleSubmit = (event) =>
    {
        event.preventDefault();

        let selectedDoctorIndex = localStorage.getItem('selectedDoctorIndx');
        let selectedNPI = 0;

        console.log(selectedDoctorIndex*1)
        people1.map((obj, indx) => {

                if (indx === Number(selectedDoctorIndex)) {
                    console.log('hello');
                    console.log(Number(selectedDoctorIndex));
                    selectedNPI = (obj.npi*1);
                }
            }
        );

        console.log(selectedNPI);

        //this.pictureDescPopup();

        //Have an overlay pop up to select physician

        alert(`Test Variables
               --------------
                 Email: ${this.data.pat_email} 
             pat_notes/Desc: ${this.state.pat_notes}
             phy_email: ${this.data.phy_email}
             caseTitle: ${this.data.caseTitle}
          patientSelectedCategory: ${this.state.patientSelectedCategory}
  
            `
        );


    }

    render()
    {
        console.log("from Case Submission modeID = " + this.props.userInfo.modeID);
        console.log("from Case Submission = " + this.props.userInfo.userID);
        return(
            <div>

                {this.drCaseCreationComponents()};
            </div>
        );
    }
};