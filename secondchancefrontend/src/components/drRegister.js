import React from 'react';


import '../App.css';

class DrRegister extends React.Component {
    state = {selectedFile: null}

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
                picture: '',
                speciality: '',
                bio: '',
                hospitalNameArr: ["Cleveland Clinic", "Johns Hopkins Hospital", "Mayo Clinic", "UCLA Medical Center"],
                selectedHospitalName: '',
                selectedBirthMonth: '',
                selectedBirthDay: '',
                selectedBirthYear: '',
                date: {
                    month: ["January", "February", "April", "May", "June", "July", "August", "September", "October",
                        "November", "December"],

                    day: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17",
                        "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],

                    year:[]
                },
            };



    }

    setCurrentYear = () =>
    {
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();

        for(let cntDay = 1900; cntDay <= currentYear; cntDay++)
        {
            this.state.date.year.push(cntDay);
        }
    }

    handleInputChange = (event) => {
        this.setState(
            {

                [event.target.name]: event.target.value
            })
    }

    //imageupload

    fileSelectedHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = (event) => {
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


    handleSubmit = async (event) => {
        this.fileUploadHandler(event);
        const data = this.state;
        /*
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
    */
        /*
            axios.post('http://52.247.220.137:80/adduser',data)
                .then(resp => console.log(resp));
        */


        /*
        data.name = "123";
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data })
        };
        fetch('http://52.247.220.137:80/physician/all', requestOptions)
            .then(response => JSON.parse(response))
            .then(response => console.log(response));

        */


        fetch("http://52.247.220.137:80/physician/all")
            .then(response => response.json())
            .then(json => console.log(json));

        //"npi", "username", "name", "bio", "addr", "qual", "reviewCnt", "email", "password"

        /*******************
         *
         * Post request happens here
         *
         ********************/
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name: this.state.firstName, username: this.state.email, npi: this.state.npi,
                bio: this.state.bio, addr: this.state.selectedHospitalName, qual: this.state.speciality, reviewCnt: '123'
                , email: this.state.email, password: this.state.password})
        };

        fetch("http://52.247.220.137:80/physician", requestOptions)
            .then(response => response.json())
            .then(response => console.log("ressppp " + response));


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
                   selectedBirthMonth: ${this.state.selectedBirthMonth}
               selectedBirthDay: ${this.state.selectedBirthDay}
                    selectedBirthYear: ${this.state.selectedBirthYear}
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


    testPostRequest()
    {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name: 1, username: 1, npi: 100,
                bio: 1, addr: 1, qual: 1, reviewCnt: 1
                , email: 1, password: 1})
        };

        fetch("http://52.247.220.137:80/physician", requestOptions)
            .then(response => response.json())
            .then(response => console.log("ressppp " + response));
    }


    render() {
        this.setCurrentYear();
        //fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then( resp => resp.json).then(result => console.log(result));
        return (
            <div>
                <button onClick={this.testPostRequest}>
                    TESTTTT
                </button>
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
                            />
                    </label>

                    <br />

                    <label>
                        Password:
                        <input
                            name="password"
                            type="text"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            />
                    </label>

                    <br />

                    <label>
                        Repeat Password:
                        <input
                            name="repassword"
                            type="text"
                            value={this.state.repassword}
                            onChange={this.handleInputChange}
                            />
                    </label>

                    <br />
                    <label>
                        First Name:
                        <input
                            name="firstName"
                            type="text"
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                            />
                    </label>

                    <br />

                    <label>
                        Last Name:
                        <input
                            name="lastName"
                            type="text"
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                            />
                    </label>

                    <br />
                    <label>
                        Birthday:
                            <select name = "selectedBirthMonth" value={this.state.value} onChange={this.handleInputChange}>
                                {this.state.date.month.map(function(selectedBM){
                                    return <option value={selectedBM}>{selectedBM}</option>
                                })}

                            </select>

                        <select name = "selectedBirthDay" value={this.state.value} onChange={this.handleInputChange}>
                            {this.state.date.day.map(function(selectedBirthD){
                                return <option value={selectedBirthD}>{selectedBirthD}</option>
                            })}
                        </select>

                        <select name = "selectedBirthYear" value={this.state.value} onChange={this.handleInputChange}>
                            {this.state.date.year.map(function(selectedBirthY){
                                return <option value={selectedBirthY}>{selectedBirthY}</option>
                            })}
                        </select>



                    </label>

                    <br />

                    <label>
                        NPI:
                        <input
                            name="npi"
                            type="text"
                            value={this.state.npi}
                            onChange={this.handleInputChange}
                            />
                    </label>

                    <br />

                    <label>
                        Speciality:
                        <input
                            name="speciality"
                            type="text"
                            value={this.state.speciality}
                            onChange={this.handleInputChange}
                            />
                    </label>

                    <br />


                    <label>
                        Select Clinic:

                        <br />

                        <select name = "selectedHospitalName" value={this.state.value} onChange={this.handleInputChange}>
                            {this.state.hospitalNameArr.map(function(hospitalName){
                                return <option value={hospitalName}>{hospitalName}</option>
                            })}


                        </select>

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