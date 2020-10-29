import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../css/login.css';
import {Registration} from "./registration";

export class Login extends React.Component
{
    constructor(props) {
        super(props);

        this.state =
            {
                email: '',
                password: '',
                show: false



            };



    }



    handleInputChange = (event) =>
    {
        this.setState(
            {

                [event.target.name]: event.target.value
            })

    }

    getLoginButton = () =>
    {
        return(
            <div className="center">
                <Button onClick={()=>{this.handleModal()}}>Login</Button>
            </div>
        );
    }

    handleSubmit = (event) =>
    {
        const data = this.state;

        alert(`Test Variables
               --------------
                  Email: ${this.state.email} 
               Password: ${this.state.password}
                    
                    xxxxxxxxxxxxxxxxxxxxxxxx
      
                  Email: ${data.email} 
               Password: ${data.password}
                `

        );


        event.preventDefault();
    }






    showLogin = () =>
    {
        return(
            <form className={'loginForm'} onSubmit={this.handleSubmit}>
                <br />
                <label>
                    Email:
                    <input
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required/>
                </label>



                <br />
                <label>
                    Password:
                    <input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required/>
                </label>

                <br />

                <label>

                </label>

                <button type="button" onClick={this.handleLoginSubmit(this.state.email, this.state.password)}>Login</button>
            </form>
        );
    }



    handleModal()
    {
        this.setState({show:!this.state.show})
    }

    handleLoginSubmit()
    {

    }

    testPhysicianLogin()
    {
        let data = {username: "Hassan", password: "password_is_plain_text"};
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

        const requestSecurityOptions = {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch("http://52.247.220.137/physician/login", requestOptions)
            .then(response => response.json())
            .then(response => console.log(response)) // if response == "error" displayErrormessage()
            .then(
                () => {
                    console.log(1234);
                    fetch("http://52.247.220.137/test_auth", requestSecurityOptions)
                        .then(response => response.json())
                        .then(response => console.log(response)) // if response == "error" displayErrormessage()
                }

    );

    }


    render() {
        this.testPhysicianLogin();
        return(
            <div>
                <div className="center" style={{borderWidth:"0px", margin:"0px", width:"0px", padding:"5px"}}>
                    <Button  style={{alignContent: ""}} onClick={()=>{this.handleModal()}}>Login</Button>
                </div>
                <Modal show ={this.state.show}>
                    <Modal.Header>Login</Modal.Header>
                    <Modal.Body>
                        {this.showLogin()}
                        <a href={"http://52.247.220.137/drRegister"}>Register</a>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>{this.handleModal()}}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>


        );
    }

}