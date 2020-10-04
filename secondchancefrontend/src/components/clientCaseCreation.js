import React from 'react';


export class ClientCaseCreation extends React.Component
{
    constructor(props) {
        super(props);
        /*
        this.data = fetch('http://52.247.220.137/manage_cases?a=1').then( resp => resp.json)
            .then(result => console.log(result));
        */
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
        };

        this.drModeID = '0';  //ID for a doctor user
        this.patModeID = '1'; //ID for a patient user
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

    drCaseCreationComponents = (event) =>
    {
        return(
            <div>

                <form style={{textAlign:"center"}}>
                    {this.pageTitleUserDisplay()}
                        <br />
                    <label>
                        <h3 style={{display:"inline"}}>Name for Case:</h3>
                        <input type={"text"} name="caseTitle" style={{display:"inline", width:"60%"}}
                               onClick={this.handleInputChange} />
                    </label>

                    <br />

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

        //Have an overlay pop up to select physician

        alert(`Test Variables
               --------------
                 Email: ${this.state.pat_email} 
             pat_notes: ${this.state.pat_notes}
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