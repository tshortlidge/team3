import React from 'react';
import {PicCarousel} from './picCarousel';
import {MultiBrowsePic} from './multiBrowsePic';
import {people1} from './data/data';
import {Row, Col, Button, Modal} from 'react-bootstrap';

import {Caller_SwipeCardAnimation} from './caller_SwipeCardAnimation';


export class CaseCreation extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            pat_email: '',  //For identifying who the case belongs to
            pat_notes: '',  //Details that patients can add to case
            phy_email: '',
            phy_firstName: '',
            phy_lastName: '',
            phy_bio: '',
            phy_spec: '',
            phy_hospital: '',
            pics: '',    //Images of the patient for the case
            caseTitle: '',
            caseCategory: '',
            userID: '1', //0 -> Doctor User, 1 -> Patient User
            show: false

        };

        this.drModeID = '0';  //ID for a doctor user
        this.patModeID = '1'; //ID for a patient user
        this.selectedDoctorInfo={};
    }

    pageTitleUserDisplay = () =>
    {
        if(this.state.userID === this.patModeID)
        {
            return(
                <label>
                    <h1>Submit Case for Second Opinion</h1>
                </label>
            );
        }
        else
        {
            return(
                <label>
                    <h1>Submit Case</h1>
                </label>
            );
        }
    }

    categoryTitleUserDisplay = () =>
    {
        console.log(this.state.userID + " - pat - " + this.patModeID);

        if(this.state.userID === this.patModeID)
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
        if(this.state.userID === this.patModeID)
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
                        <textarea name="pat_notes" rows="20" cols="100" value={this.state.pat_notes}
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



    drCaseCreationComponents = (event) =>
    {
        return(
            <div>

                <form style={{textAlign:"center"}}>
                    {this.pageTitleUserDisplay()}
                    <br />
                    <label>
                        <h3 style={{display:"inline"}}>Name for Case:</h3>
                        <textarea  name="caseTitle" rows="1" cols="80" value={this.state.caseTitle} onChange={this.handleInputChange}/>
                    </label>

                    <br />
                    <label>
                        <h3 style={{display:"inline"}}>Patient's Name:</h3>
                        <textarea  name="caseTitle" rows="1" cols="80" value={this.state.caseTitle} onChange={this.handleInputChange}/>
                    </label>



                    <br />
                    <label style={{float: "left"}}>
                        <h3 style={{display:"inline"}}>Patient's ID:</h3>
                        <textarea  name="caseTitle" rows="1" cols="30" value={this.state.caseTitle} onChange={this.handleInputChange}/>
                    </label>

                    <br />



                    {this.viewOrAddPicMode()}

                    <Row>
                        <Col style={{width: "10000px"}}>
                            <label>

                                {this.categoryTitleUserDisplay()}

                                <select name="caseCategory" value={this.state.value} onChange={this.handleInputChange}>
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
                                </select>
                            </label>
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


                </form>
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
                 Email: ${this.state.pat_email} 
             pat_notes/Desc: ${this.state.pat_notes}
             phy_email: ${this.state.phy_email}
             caseTitle: ${this.state.caseTitle}
          caseCategory: ${this.state.caseCategory}
  
            `
        );


    }

    render()
    {
        return(
            <div>

                {this.drCaseCreationComponents()}
            </div>
        );
    }
};