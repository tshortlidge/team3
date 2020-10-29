import React from 'react';
import {RegFunctionalComponent} from './registration_funct_comp';
import '../App.css';

export class Registration extends React.Component {
    state = {selectedFile: null}

    constructor(props) {
        super(props);

        this.data = {};

        // this.data.email= '';
        // this.data.password= '';
        // this.data.repassword= '';
        // this.data.firstName= '';
        // this.data.lastName= '';
        // this.data.npi= '';
        // this.data.picture= '';
        // this.data.speciality= '';
        // this.data.bio= '';
        this.data.hospitalNameArr= ["Cleveland Clinic", "Johns Hopkins Hospital", "Mayo Clinic", "UCLA Medical Center"];
        // this.data.selectedHospitalName= '';
        // this.data.selectedBirthMonth= '';
        // this.data.selectedBirthDay= '';
        // this.data.selectedBirthYear= '';
        this.data.date= {
            month: ["January", "February", "April", "May", "June", "July", "August", "September", "October",
                "November", "December"],

            day: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17",
                "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],

            year:[]
        };
        this.data.userMode = this.props.userMode;



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


    // handleInputChange = (event) => {
    //     this.setState(
    //         {
    //
    //             [event.target.name]: event.target.value
    //         })
    // }




    handleSubmit = () => {
        const data = this.iter_over_items();
        console.log(data);

        //****************************
        // *
        // * GET request happens here
        // *
        // *****************************

        // fetch("http://52.247.220.137:80/physician/all")
        //     .then(response => response.json())
        //     .then(json => console.log(json));

        //"npi", "username", "name", "bio", "addr", "qual", "reviewCnt", "email", "password"

        //****************************
        //*
        //* POST request happens here
        //*
        //*****************************
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        // {name: data.firstName, username: data.email, npi: data.npi,
        //     bio: data.bio, addr: data.selectedHospitalName, qual: data.speciality, reviewCnt: '123'
        //     , email: data.email, password: data.password}

        fetch("http://52.247.220.137:80/physician", requestOptions)
            .then(response => response.json())
            .then(response => console.log("ressppp " + response)); // if response == "error" displayErrormessage()

    /*
        alert(`Test Variables
               --------------
                               
                    
                  Email: ${data.email} 
               Password: ${data.password}
             Repassword: ${data.repassword}
              FirstName: ${data.firstName}
               LastName: ${data.lastName}
                    NPI: ${data.npi}
             Speciality: ${data.speciality}
                Address: ${data.address}
                   City: ${data.city}
                Picture: ${data.picture}
                    Bio: ${data.bio}`
        );

*/
        // window.event.preventDefault();

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
                <RegFunctionalComponent data={this.data} handleSubmit={(e) => this.handleSubmit(e)}/>
            </div>
        );
    }
};

//                <DrRegFunctionalComponent data={this.data} funct={e => this.handleSubmit(e)}/>
