import React from 'react';
import '../css/hoverForText.css';

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

    setDefaultHospital = (event) =>
    {

        return(
            <label>
                Select Clinic:

                <br/>

                <select name = "selectedHospitalName" value={this.state.value} defaultValue={this.state.hospitalNameArr[3].value} onChange={this.handleInputChange}>
                    {this.state.hospitalNameArr.map(function(hospitalName, index){
                        return <option key={index} value={hospitalName.value}>{hospitalName.value}</option>
                    })}


                </select>


            </label>
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
        fetch('http://52.247.220.137:80/adduser', requestOptions)
            .then(response => JSON.parse(response))
            .then(response => console.log(response));
*/
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
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <u>Edit Personal Info</u>
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
                            placeholder={this.state.oldEmail}
                        />
                    </label>

                    <br />

                    <label>
                        Change Password:
                        <input
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            placeholder={'******'}
                            />
                    </label>

                    <br />

                    <label>
                        Repeat Password:
                        <input
                            name="repassword"
                            type="password"
                            value={this.state.repassword}
                            onChange={this.handleInputChange}
                            placeholder={'******'}
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
                            placeholder={this.state.oldFirstName}
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
                            placeholder={this.state.oldLastName}
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
                            placeholder={this.state.oldSpeciality}
                            />
                    </label>

                    <br />


                    {this.setDefaultHospital()}



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
                        <br /><br />
                        <div className="dropdownText">
                            <span>Hover for Old Bio</span>
                            <div className="dropdownText-content">
                                <p><div style={{textAlign:"center"}}>Current Bio:</div><br />{this.state.oldBio}</p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <textarea name="oldBio" value={this.state.oldBio} ref="newText" rows="20" cols="100" onChange={this.handleInputChange} ></textarea>
                    </label>
                    <br />
                    <br />
                    <button type="submit" value={this.state.value}>Submit</button>
                </form>
            </div>
        );
    }
}