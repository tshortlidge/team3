import React from 'react';
import axios from 'axios';

import '../App.css';

class DrRegister extends React.Component {
    state = { selectedFile: null }
    constructor(props) {
        super(props);

        this.state =
            {
                postId: null,
                email: '',
                password: '',
                repassword: '',
                firstName: '',
                lastName: '',
                npi: '',
                address: '',
                city: '',
                us_state: '',
                zip: '',
                picture: '',
                speciality: '',
                bio: ''
            };


    }




    handleInputChange = (event) =>
    {
        this.setState(
            {

                [event.target.name]: event.target.value
            })
    }

    //imageupload

    fileSelectedHandler = (event) =>
    {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = (event) =>
    {
        /*
        event.preventDefault();
        const fd = new FormData();
        fd.append('drProfilePic', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('http://52.247.220.137/manage_cases?a=1', fd,
            {
                onUploadProgress: progressEvent => {
                    console.log('Upload Progress: ' + Math.round(progressEvent.loaded/ progressEvent.total*100) + '%')
                }
            })
            .then(response => { console.log(response) });

        */
    }








    handleSubmit = (event) =>
    {
        this.fileUploadHandler(event);
        const data = this.state;

        /*
        axios.post('http://172.116.201.31:8080/adduser',data)
            .then(resp => console.log(resp));
        */

        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data })
        };
        fetch('http://172.116.201.31:8080/adduser', requestOptions)
            .then(response => console.log(response))
            .then(data => this.setState({ postId: data.id }));

        alert(`Test Variables
               --------------
                  Email: ${this.state.email} 
               Password: ${this.state.password}
             Repassword: ${this.state.repassword}
              FirstName: ${this.state.firstName}
               LastName: ${this.state.lastName}
                    NPI: ${this.state.npi}
             Speciality: ${this.state.speciality}
                Address: ${this.state.address}
                   City: ${this.state.city}
               US_State: ${this.state.us_state}
                    Zip: ${this.state.zip}
                Picture: ${this.state.picture}
                    Bio: ${this.state.bio}
                    
                    
                    xxxxxxxxxxxxxxxxxxxxxxxx
                    
                    
                  Email: ${data.email} 
               Password: ${data.password}
             Repassword: ${data.repassword}
              FirstName: ${data.firstName}
               LastName: ${data.lastName}
                    NPI: ${data.npi}
             Speciality: ${data.speciality}
                Address: ${data.address}
                   City: ${data.city}
               US_State: ${data.us_state}
                    Zip: ${data.zip}
                Picture: ${data.picture}
                    Bio: ${data.bio}`
             );


        event.preventDefault();

    }
    render() {
        //fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then( resp => resp.json).then(result => console.log(result));
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <u>Registration for Physicians</u>
                        <br />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            name="email"
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            required/>
                    </label>



                    <br />
                    <label>
                        Password:
                        <input
                            name="password"
                            type="text"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            required/>
                    </label>

                    <br />
                    <label>
                        Repeat Password:
                        <input
                            name="repassword"
                            type="text"
                            value={this.state.repassword}
                            onChange={this.handleInputChange}
                            required/>
                    </label>

                    <br />
                    <label>
                        First Name:
                        <input
                            name="firstName"
                            type="text"
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                            required/>
                    </label>

                    <br />

                    <label>
                        Last Name:
                        <input
                            name="lastName"
                            type="text"
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                            required/>
                    </label>

                    <br />

                    <label>
                        NPI:
                        <input
                            name="npi"
                            type="text"
                            value={this.state.npi}
                            onChange={this.handleInputChange}
                            required/>
                    </label>

                    <br />

                    <label>
                        Speciality:
                        <input
                            name="speciality"
                            type="text"
                            value={this.state.speciality}
                            onChange={this.handleInputChange}
                            required/>
                    </label>

                    <br />
                    <u>Clinic's Address:</u>
                    <br />
                    <label>
                        Street:
                        <input
                            name="address"
                            type="text"
                            value={this.state.address}
                            onChange={this.handleInputChange}
                            required/>
                    </label>

                    <br />
                    <label>
                        City:
                        <input
                            name="city"
                            type="text"
                            value={this.state.city}
                            onChange={this.handleInputChange}
                            required/>
                    </label>

                    <label>
                        State:
                        <select name = "us_state" value={this.state.value} onChange={this.handleInputChange}>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>

                    </label>

                    <label>
                        Zip Code:
                        <input
                            name="zip"
                            type="numbers"
                            value={this.state.zip}
                            onChange={this.handleInputChange}
                            required/>
                    </label>

                    <br />
                    <label>
                        Upload Profile Picture:
                        <br />
                        <div className={"UploadImg"}>
                            <input type={"file"} onChange={this.fileSelectedHandler}/>
                            <button onClick={this.fileUploadHandler}>Upload</button>
                        </div>
                    </label>

                    <br />
                    <label>
                        Bio:
                        <br />
                        <textarea name="bio" rows="20" cols="100" value={this.state.bio} onChange={this.handleInputChange}></textarea>
                    </label>
                    <br />
                    <br />
                    <button type="submit" value={this.state.value}>Register</button>
                </form>
            </div>
        );
    }
};

export default DrRegister;