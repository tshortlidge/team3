import React from 'react';
import {DrRegFunctionalComponent} from './drRegFunctComponent';
import '../App.css';

class DrRegister extends React.Component {
    state = {selectedFile: null}

    constructor(props) {
        super(props);

        this.data = {};

        this.data.email= '';
        this.data.password= '';
        this.data.repassword= '';
        this.data.firstName= '';
        this.data.lastName= '';
        this.data.npi= '';
        this.data.picture= '';
        this.data.speciality= '';
        this.data.bio= '';
        this.data.hospitalNameArr= ["Cleveland Clinic", "Johns Hopkins Hospital", "Mayo Clinic", "UCLA Medical Center"];
        this.data.selectedHospitalName= '';
        this.data.selectedBirthMonth= '';
        this.data.selectedBirthDay= '';
        this.data.selectedBirthYear= '';
        this.data.date= {
            month: ["January", "February", "April", "May", "June", "July", "August", "September", "October",
                "November", "December"],

            day: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17",
                "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],

            year:[]
            };

        //this.handleSubmit = this.handleSubmit(this);

    }

    setCurrentYear = () =>
    {
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();

        for(let cntDay = 1900; cntDay <= currentYear; cntDay++)
        {
            this.data.date.year.push(cntDay);


        }
    }

    /*
    handleInputChange = (event) => {
        this.setState(
            {

                [event.target.name]: event.target.value
            })
    }
    */


/*
    handleSubmit = async (event) => {

        //****************************
        // *
        // * GET request happens here
        // *
        // *****************************

        fetch("http://52.247.220.137:80/physician/all")
            .then(response => response.json())
            .then(json => console.log(json));

        //"npi", "username", "name", "bio", "addr", "qual", "reviewCnt", "email", "password"

        //****************************
         //*
         //* POST request happens here
         //*
         //*****************************
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
                               
                    
                  Email: ${this.data.email} 
               Password: ${this.data.password}
             Repassword: ${this.data.repassword}
              FirstName: ${this.data.firstName}
               LastName: ${this.data.lastName}
                    NPI: ${this.data.npi}
             Speciality: ${this.data.speciality}
                Address: ${this.data.address}
                   City: ${this.data.city}
                Picture: ${this.data.picture}
                    Bio: ${this.data.bio}`
        );


        event.preventDefault();

    }
*/

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
        return (
            <div>
                
            </div>
                );
    }
};

//                <DrRegFunctionalComponent data={this.data} funct={e => this.handleSubmit(e)}/>
export default DrRegister;