import React from 'react';
import {Button, Form, Col, Row, Container} from 'react-bootstrap';
import '../css/hoverForText.css';
import {MDBInput} from 'mdbreact';
export class DrEdit extends React.Component
{
    constructor(props) {
        super(props);

        this.state =
            {
                oldBio: 'I danced all night with no water.',
                email: 'KM@gg.com',
                password: '',
                repassword: '',
                firstName: 'Kent',
                lastName: 'Moore',
                npi: '6161',
                picture: '',
                speciality: 'Lungs',
                copiedText:'',
                hospitalNameArr: [
                    {label:"Cleveland Clinic", value:"Cleveland Clinic"},
                    {label: "Johns Hopkins Hospital", value: "Johns Hopkins Hospital"},
                    {label: "Mayo Clinic", value: "Mayo Clinic"},
                    {label: "UCLA Medical Center", value: "UCLA Medical Center"}
                    ],
                currentHospital: 'Johns Hopkins Hospital'
            };



    }

    iter_over_items(){
        let inputs = document.getElementById("myForm").elements;

        let to_send = {};

        for (var i = 0; i < inputs.length; i++) {
            let element = inputs[i];

            to_send[element.name] = element.value;


        }


        return to_send;
    }

    FetchClientInfo()
    {
/*
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username: 1, password: 1, name: 1, age: 1, sex: 1, medical_history: 1, email: 1})
        };

        fetch("http://52.247.220.137:80/client", requestOptions)
            .then(response => console.log(response));
*/


/*
        fetch("http://52.247.220.137:80/client/all")
            .then(response => response.json())
            .then(json => console.log(json));
*/
    }

    setDefaultHospital = (event) =>
    {
        let indxCurrentHospital = 0;
        const currHospitalName = this.state.currentHospital;

        //Checks for the index of current hospital for default value of select menu right below
        {this.state.hospitalNameArr.map(function(hospitalName, index){
            if(currHospitalName === hospitalName.value)
            {
                indxCurrentHospital = index;
            }
        })}

        console.log('----------- ' + indxCurrentHospital);
        return(
            <Form.Label>
                Select Clinic:

                <br/>

                <select name = "selectedHospitalName" value={this.state.value}
                        defaultValue={this.state.hospitalNameArr[indxCurrentHospital].value}
                        onChange={this.handleInputChange}>
                    {this.state.hospitalNameArr.map(function(hospitalName, index){
                        return <option key={index} value={hospitalName.value}>{hospitalName.value}</option>
                    })}


                </select>


            </Form.Label>
        );

    }

    handleInputChange = (event) => {

        this.setState(
            {

                [event.target.name]:event.target.value

            })
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        //this.fileUploadHandler(event);

        //const data = this.state;

        const data = {'name': this.state.firstName + this.state.lastName, 'email': this.state.email,
            'password': this.state.password};
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data })
        };

        let resp = await fetch('http://52.247.220.137:80/adduser', requestOptions);

        //Getting the text of the response
        let toConsoles = await resp.text();

        console.log(toConsoles);

        console.log("oldBio = " + this.state.oldBio)
        alert(`Test Variables
               --------------
                  Email: ${this.state.email} 
               Password: ${this.state.password}
             Repassword: ${this.state.repassword}
              FirstName: ${this.state.firstName}
               LastName: ${this.state.lastName}
                    NPI: ${this.state.npi}
             Speciality: ${this.state.speciality}
                selectedHospitalName: ${this.state.selectedHospitalName}
                Picture: ${this.state.picture}
                    oldBio: ${this.state.oldBio}
                    
                    
                    xxxxxxxxxxxxxxxxxxxxxxxx
                    
                    
                  Email: ${data.email} 
               Password: ${data.password}
             Repassword: ${data.repassword}
             `
        );




    }


    render() {
        return (
            <div>
                <Button onClick={this.FetchClientInfo}>testFetch</Button>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Label>
                        <u>Edit Personal Info</u>
                        <br />
                    </Form.Label>
                    <br />
                    <Form.Label>
                        Email:
                        <Form.Control as={"input"}
                            name="email"
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInputChange}

                        />
                    </Form.Label>

                    <br />

                    <Form.Label>
                        Change Password:
                        <Form.Control as={"input"}
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            placeholder={'******'}
                            />
                    </Form.Label>

                    <br />

                    <Form.Label>
                        Repeat Password:
                        <input
                            name="repassword"
                            type="password"
                            value={this.state.repassword}
                            onChange={this.handleInputChange}
                            placeholder={'******'}
                            />
                    </Form.Label>

                    <br />
                    <Form.Label>
                        First Name:
                        <Form.Control as={"input"}
                            name="firstName"
                            type="text"
                            value={this.state.firstName}
                            onChange={this.handleInputChange}

                            />
                    </Form.Label>

                    <br />

                    <Form.Label>
                        Last Name:
                        <Form.Control as={"input"}
                            name="lastName"
                            type="text"
                            value={this.state.lastName}
                            onChange={this.handleInputChange}

                            />
                    </Form.Label>

                    <br />


                    <Form.Label>
                        Speciality:
                        <Form.Control as={"input"}
                            name="speciality"
                            type="text"
                            value={this.state.speciality}
                            onChange={this.handleInputChange}

                            />
                    </Form.Label>

                    <br />


                    {this.setDefaultHospital()}


                    <br />
                    <Form.Label>
                        Bio:
                        <br /><br />
                        <div className="dropdownText">
                            <span>Hover for Old Bio</span>
                            <div className="dropdownText-content">
                                <p><div style={{textAlign:"center"}}>Current Bio:</div><br />{this.state.oldBio}</p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <MDBInput type="textarea" name="oldBio" value={this.state.oldBio} ref="newText" rows="20" cols="100" onChange={this.handleInputChange} ></MDBInput>
                    </Form.Label>
                    <br />
                    <Form.Label>
                        Enter Password to submit changes:
                        <MDBInput as={"input"}
                            name="repassword"
                            type="password"
                            value={this.state.repassword}
                            onChange={this.handleInputChange}
                            placeholder={'******'}
                            required/>
                    </Form.Label>
                    <br />
                    <Button type="submit" value={this.state.value}>Submit</Button>
                </Form>
            </div>
        );
    }
}